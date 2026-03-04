// Dados da página de coletivos
import { CyberCommunity } from "@/components/molecules/CyberCommunityCard";

export const communityByCategory: Record<string, CyberCommunity[]> = {
    Coletivos: [
        {
            id: '1',
            title: 'Acervo trans-anarquista',
            type: 'link',
            url: 'https://transanarquismo.noblogs.org/acervo/',
            description: 'Acervo trans-anarquista contém textos, livros e artigos sobre dissidências, perspectivas trans-anarquistas sobre o regime de gênero e como resistir e abolí-lo pela libertação do corpo.'
        },
        {
            id: '2',
            title: 'Coletivo Transcentrado',
            type: 'link',
            url: 'https://coletivotranscentrado.com.br/',
            description: 'No site do coletivo Transcentrado você pode encontrar informações sobre processo de transição e um discord amigável para pessoas trans e com deficiência.'
        },
        {
            id: '3',
            title: 'Villain Era',
            type: 'link',
            url: "https://villain-era.carrd.co/#guerra",
            description: 'O coletivo Villain Era é formado por artistas trans de Juiz de Fora (MG) que tem como objetivo expor, enaltecer e compartilhar a arte e a poética de seus alunes Trans...e também dominar o mundo!'
        },
        {
            id: '4',
            title: 'Revolta Anarkokuir',
            type: 'link',
            url: 'https://anarkokuir.hotglue.me/',
            description: 'O grupo anarco-kuir busca confrontar a assimilação dos movimentos LGBTs e elaborar uma anti-política queer e anarquista contra o Estado, o capital e todas as formas de opressão.'
        },
        {
            id: '5',
            title: 'Revista Estudos Transviades',
            type: 'link',
            url: 'https://www.revistaestudostransviades.org/',
            description: 'A Revista Estudos Transviades propõe um espaço de trocas e produção de conhecimento livre de demandas academicistas como iniciativa para criar um espaço de acolhimento e divulgação de produções de pessoas transmasculinas.'
        },
        {
            id: '6',
            title: 'Antimídia',
            type: 'link',
            url: 'https://antimidia.org/',
            description: 'Antimídia é um coletivo audiovisual anarquista dos territórios ao sul da Mata Atlântica, na região ocupada pelo Estado Brasileiro.'
        }
    ]
};