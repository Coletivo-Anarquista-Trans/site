// Dados da página de resources
import {CyberResource} from "@/components/molecules/CyberResourceCard";

export const resourcesByCategory: Record<string, CyberResource[]> = {
   ColetivosTrans: [
    {
     id: '6',
     title: 'Acervo trans-anarquista',
     type: 'link',
     url: 'https://transanarquismo.noblogs.org/acervo/',
     description: 'Acervo com textos, livros e artigos sobre dissidência de gênero, perspectivas trans-anarquistas sobre o regime de gênero e como resistir e abolí-lo pela libertação do corpo',
     category: 'Livros e Artigos',
     dateAdded: '2025-05-25',
    },
    {
     id: '7',
     title: 'Coletivo Transcentrado',
     type: 'link',
     url: 'https://coletivotranscentrado.com.br/',
     description: 'Site do Coletivo Transcentrado, possui informações sobre processo de transição, e um discord amigável para pessoas trans e com deficiência',
     category: 'Coletivos',
     dateAdded: '2025-05-25',
    },
    {
      id: '8',
      title: 'Villain Era',
      type: 'link',
      url: "https://villain-era.carrd.co/#guerra",
      description: 'Coletivo de artistas trans de Juiz de Fora (Minas Gerais), que tem o objetivo de expor, enaltecer, e compartilhar a arte e a poética de seus alunes Trans...e dominar o mundo. Todes criadores e suas diversidades de gênero são bem vindes.',
      category: 'Coletivos',
      dateAdded: '2025-06-03',
    },
    {
      id: '9',
      title: 'revolta anarkokuir',
      type: 'link',
      url: 'https://anarkokuir.hotglue.me/',
      description: 'Coletivo anarquista queer.',
      category: 'Coletivos',
      dateAdded: '2025-06-21',
    }
  ],
   Cyberhormônios: [
    {
      id: '10',
      title: 'Piccrew - Criador de corpos-virtuais',
      type: 'link',
      url: 'https://picrew.me/en/search',
      description: 'Ciberespaço para você projetar novos corpos-virtuais, escolha um dos templates e projete um corpo que você gostaria de ter!',
      category: 'Hormonização',
      dateAdded: '2025-03-28',
    },
  ]
};