import { ImageTopic } from "@/types/image";

export const imageTopics: ImageTopic[] = [
  {
    id: "1",
    title: "CATS zine 01",
    description:
      "Primeira zine distribuída pelo coletivo (tipo mini zine, o verso é um pôster).",
    images: [
      {
        id: "zine-frente",
        src: "/trans-images/zine-frente.jpg",
        downloadName: "zine-frente.jpg",
      },
      {
        id: "zine-verso",
        src: "/trans-images/zine-verso.jpg",
        downloadName: "zine-verso.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Adesivos CATS",
    description: "Adesivos do coletivo, para espalhar! >:)",
    images: [
      {
        id: "adesivo-01",
        src: "/trans-images/adesivo-qr-code.png",
        downloadName: "adesivo-qr-code.png",
      },
      {
        id: "adesivo-02",
        src: "/trans-images/adesivo-monstrifique.png",
        downloadName: "adesivo-monstrifique.png",
      },
      {
        id: "adesivo-03",
        src: "/trans-images/adesivo-ciborguefique.png",
        downloadName: "adesivo-ciborguefique.png",
      },
    ],
  },
];
