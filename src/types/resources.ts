export interface Resource {
    id: string;
    title: string;
    type: 'file' | 'link';
    url: string;
    description: string;
    category?: string;
    fileSize?: string;
    dateAdded: string;
  }
  