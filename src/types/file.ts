export interface ImageFile {
  fileKey?: number;
  fileName: string;
  fileSize: number;
  fileType: string;
  base64Data: string;
}

export interface ImageItem {
  id: number;
  title: string;
  imageData: Blob | File | ArrayBuffer | null;
  imageType: string;
  tumbnail?: Blob;
  uploadedAt: number;
}
