interface Link {
  text: string;
  url: string;
}

interface AdminMenuItemProps {
  title: string;
  links: Link[];
}

const AdminMenuItem: React.FC<AdminMenuItemProps> = ({ title, links }) => {
  return (
    <li>
      <h2>{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default AdminMenuItem;
