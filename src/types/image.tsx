export interface ImageItem {
  id: string;
  src: string;
  alt?: string;
  downloadName?: string;
}

export interface ImageTopic {
  id: string;
  title: string;
  description?: string;
  images: ImageItem[];
}