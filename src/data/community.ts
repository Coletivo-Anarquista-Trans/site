// Dados da página de coletivos
import { CyberCommunity } from "@/components/molecules/CyberCommunityCard";

export const communityByCategory: Record<string, CyberCommunity[]> = {
    Coletivos: [
        {
            id: '1',
            title: 'Acervo trans-anarquista',
            type: 'link',
            url: 'https://transanarquismo.noblogs.org/acervo/',
            description: 'Acervo com textos, livros e artigos sobre dissidências, perspectivas trans-anarquistas sobre o regime de gênero e como resistir e abolí-lo pela libertação do corpo.'
        },
        {
            id: '2',
            title: 'Coletivo Transcentrado',
            type: 'link',
            url: 'https://coletivotranscentrado.com.br/',
            description: 'Site do coletivo, onde você pode encontrar informações sobre processo de transição, e um discord amigável para pessoas trans e com deficiência.'
        },
        {
            id: '3',
            title: 'Villain Era',
            type: 'link',
            url: "https://villain-era.carrd.co/#guerra",
            description: 'Card com informações sobre o coletivo, formado por artistas trans de Juiz de Fora (MG), que tem o objetivo de expor, enaltecer, compartilhar a arte e a poética de seus alunes Trans...e dominar o mundo! Todes criadores e suas diversidades de gênero são bem vindes.'
        },
        {
            id: '4',
            title: 'Revolta Anarkokuir',
            type: 'link',
            url: 'https://anarkokuir.hotglue.me/',
            description: 'Grupo anarco-kuir que busca confrontar a assimilação dos movimentos LGBTs e elaborar uma anti-política queer e anarquista contra o Estado, o capital e todas as formas de opressão.'
        },
        {
            id: '5',
            title: 'Revista Estudos Transviades',
            type: 'link',
            url: 'https://www.revistaestudostransviades.com/',
            description: 'A Revista Estudos Transviades propõe um espaço de trocas e produção de conhecimento, livre de demandas academicistas como iniciativa para criar um espaço de acolhimento e divulgação de produções de pessoas transmasculinas.'
        }
    ]
};