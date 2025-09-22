// Dados da página de resources
import { CyberResource } from "@/components/molecules/CyberResourceCard";

export const resourcesByCategory: Record<string, CyberResource[]> = {
  Cyberhormônios: [
    {
      id: '1',
      title: 'Piccrew - Criador de corpos-virtuais',
      type: 'link',
      url: 'https://picrew.me/en/search',
      description: 'Ciberespaço para você projetar novos corpos-virtuais, escolha um dos templates e projete um corpo que você gostaria de ter!',
      category: 'Hormonização',
      dateAdded: '2025-03-28',
    },
    {
      id: '2',
      title: 'Treinador de voz',
      type: 'link',
      url: 'https://acousticgender.space/',
      description: 'Treinador de voz para acompanhar tom e ressonância da voz adequada ao gênero. Você pode usar seu microfone ou áudios gravados da sua voz.',
      category: 'Treinamento de voz',
      dateAdded: '2025-09-22',
    },
  ],
  Autodefesa: [
    {
      id: '3',
      title: 'Autodefesa de bonecas',
      type: 'link',
      url: 'https://drive.google.com/file/d/1ZyyAD6fcIfidZa_v8ET3K9D76u8O67RS/view',
      description: 'Esse guia contém formulações originais, assim como traduções e adaptações de outros materiais sobre segurança e autodefesa.',
      category: 'Autodefesa',
      dateAdded: '2025-09-22',
    },
  ]
};
