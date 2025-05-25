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
  // Instituições: [
  //   {
  //     id: '6',
  //     title: 'IBRAT - Instituto Brasileiro de Transmasculinidades',
  //     type: 'link',
  //     url: 'https://www.ibratsp.com/',
  //     description: 'Site do Instituto Brasileiro de Transmasculinidades',
  //     category: 'Recursos Gerais',
  //     dateAdded: '2025-03-28',
  //   },
  //   {
  //     id: '7',
  //     title: 'Casa 1',
  //     type: 'link',
  //     url: 'https://www.casaum.org/',
  //     description: 'Site da Casa 1, centro de acolhimento LGBT+',
  //     category: 'Recursos Gerais',
  //     dateAdded: '2025-03-28',
  //   }
  // ],
};