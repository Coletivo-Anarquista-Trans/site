// Dados da página de resources
import {CyberResource} from "@/components/molecules/CyberResourceCard";
import { getImagePath } from "@/utils/imagePath";

export const resourcesByCategory: Record<string, CyberResource[]> = {
  Hormonização: [
    {
      id: '1',
      title: 'DIY HRT Directory',
      type: 'link',
      url: 'https://diyhrt.wiki/index',
      description: 'Como realizar a auto-hormonização (DIY) de forma segura',
      category: 'Hormonização',
      dateAdded: '2025-03-28',
    },
  ],
  Transmasc: [
    {
      id: '2',
      title: 'Introdução a hormonização transmasculina',
      type: 'file',
      url: getImagePath('/trans-resources/intro_a_th_transmasc.pdf'),
      description: 'Guia introdutório a hormonização para transmasculinos',
      category: 'Transmasc',
      dateAdded: '2025-03-28',
    },
    {
      id: '3',
      title: 'Guia DIY de hormonização transmasculina',
      type: 'file',
      url: getImagePath('/trans-resources/transmasc_th_diy.pdf'),
      description: 'Guia de hormonização DIY para transmasculinos',
      category: 'Transmasc',
      dateAdded: '2025-03-28',
    },
  ],
  Transfem: [
    {
      id: '4',
      title: 'Guia DIY de hormonização transfeminina',
      type: 'file',
      url: getImagePath('/trans-resources/transfem_th_diy.pdf'),
      description: 'Guia de hormonização DIY para transfemininas',
      category: 'Transfem',
      dateAdded: '2025-03-28',
    },
    {
      id: '5',
      title: 'Transfeminine Science',
      type: 'link',
      url: 'https://transfemscience.org/',
      description: 'Recursos científicos para pessoas transfemininas',
      category: 'Recursos Gerais',
      dateAdded: '2025-03-28',
    },
  ],
   EcossistemaTrans: [
    {
     id: '6',
     title: 'Acervo digital trans-anarquista',
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
     description: 'Site do Coletivo Transcentrado, possui informações sobre o processo de transição, um discord amigável para a comunidade trans e com deficiência.',
     category: 'Parceiros',
     dateAdded: '2025-05-25',
    },
  //   {
  //     id: '8',
  //     title: 'IBRAT - Instituto Brasileiro de Transmasculinidades',
  //     type: 'link',
  //     url: 'https://www.ibratsp.com/',
  //     description: 'Site do Instituto Brasileiro de Transmasculinidades',
  //     category: 'Recursos Gerais',
  //     dateAdded: '2025-03-28',
  //   },
  //   {
  //     id: '9',
  //     title: 'Casa 1',
  //     type: 'link',
  //     url: 'https://www.casaum.org/',
  //     description: 'Site da Casa 1, centro de acolhimento LGBT+',
  //     category: 'Recursos Gerais',
  //     dateAdded: '2025-03-28',
  //   }
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