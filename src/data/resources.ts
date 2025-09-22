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
      dateAdded: '2025-03-28',
    },
  ]
};