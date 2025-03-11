import { openDB } from "idb";
import { ImageItem } from "@/types/file";

interface soatDB {
  images: {
    key: number;
    value: ImageItem;
    indexes: { "by-title": string; "by-date": number };
  };
  //여기에 필요한 스토어 인터페이스 작성
}

const dbName = "soat";
const dbVersion = 1;

export const initDB = async () => {
  return openDB<soatDB>(dbName, dbVersion, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
      //여기에 필요한 스토어 추가 가능
    },
  });
};

export const saveImage = async (item: ImageItem): Promise<IDBValidKey> => {
  const db = await initDB();
  return db.add("images", item);
};

export const getImage = async (id: string): Promise<ImageItem> => {
  const db = await initDB();
  return db.get("images", id);
};

export const getAllImages = async (): Promise<ImageItem[]> => {
  const db = await initDB();
  return db.getAll("images");
};

export const deleteImage = async (id: string): Promise<void> => {
  const db = await initDB();
  return db.delete("images", id);
};

export const clearAllImages = async (): Promise<void> => {
  const db = await initDB();
  return db.clear("images");
};
