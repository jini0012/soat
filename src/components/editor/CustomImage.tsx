// extensions/CustomImage.tsx
import { Image } from "@tiptap/extension-image";

const CustomImage = Image.extend({
  name: "customImage",

  addAttributes() {
    return {
      ...this.parent?.(),
      key: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-key"),
        renderHTML: (attributes) => {
          if (!attributes.key && attributes.key !== 0) {
            return {};
          }
          return {
            "data-key": attributes.key,
          };
        },
      },
    };
  },
});

export default CustomImage;
