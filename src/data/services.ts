// Dados dos serviços públicos de saúde por estado
export interface ServiceLocation {
    name: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    notes?: string;
}

export interface StateServices {
    services: ServiceLocation[];
}

export const servicesByState: Record<string, StateServices> = {
    "Acre": {
        services: [
            {
                name: "Centro de Referência LGBT do Acre",
                address: "Rua Francisco Mangabeira, 33 - Bosque, Rio Branco, AC",
                phone: "(68) 3215-2310",
                email: "crsejudh@ac.gov.br"
            }
        ]
    },
    "Amazonas": {
        services: [
            {
                name: "Universidade Estadual do Amazonas - Ambulatório de Diversidade Sexual e Gênero",
                address: "Rua Codajás, 26, Cachoeirinha, AM",
                phone: "(92) 3612-4200 / 4208 / 4217",
                email: "dirpam@policodajas.am.gov.br"
            }
        ]
    },
    "Ceará": {
        services: [
            {
                name: "Ambulatório de Saúde Trans do Hospital de Saúde Mental Frota Pinto",
                address: "Rua Vicente Nobre Macêdo, s/n - Messejana, Fortaleza, CE",
                phone: "(85) 3101-4348"
            }
        ]
    },
    "Distrito Federal": {
        services: [
            {
                name: "Distrito Federal Ambulatório Trans do Hospital Dia",
                address: "Asa Sul EQS 508/509 - Asa Sul, Brasília, DF",
                phone: "(61) 3445-7529 | 3445-7521"
            }
        ]
    },
    "Espírito Santo": {
        services: [
            {
                name: "Hospital Universitário Cassiano Antônio de Moraes",
                address: "Av. Mal. Campos, 1355 - Santos Dumont, Vitória, ES",
                phone: "(27) 3335-7100"
            }
        ]
    },
    "Goiás": {
        services: [
            {
                name: "Univ Fed. de Goiás – Hospital das Clínicas da Universidade Federal de Goiás",
                address: "1ª Avenida, S/N - Setor Leste Universitário, Goiânia, GO",
                phone: "(62) 3269-8200"
            },
            {
                name: "Ambulatório de Transexualidade do Hospital Geral de Goiânia Alberto Rassi",
                address: "Av. Anhanguera, 6479 - St. Oeste, Goiânia, GO",
                phone: "(62) 3209-9800"
            }
        ]
    },
    "Maranhão": {
        services: [
            {
                name: "Ambulatório de Sexualidade do Hospital Universitário da UFMA (HU-UFMA)",
                address: "Rua Barão de Itapary, 227 - Centro, São Luís, MA",
                phone: "(98) 2109-1000 | (98) 2109-1002"
            }
        ]
    },
    "Mato Grosso do Sul": {
        services: [
            {
                name: "Hospital Universitário Maria Aparecida Pedrossian, da Universidade Federal de Mato Grosso do Sul (HUMAP-UFMS)",
                address: "Av. Sen. Filinto Müler, 355 - Vila Ipiranga, Campo Grande, MS",
                phone: "(65) 3345-3000"
            }
        ]
    },
    "Minas Gerais": {
        services: [
            {
                name: "Ambulatório de Atenção Especializada no Processo Transexualizador do Hospital Eduardo de Menezes",
                address: "Rua Dr. Cristiano Rezende, 2213 - Bonsucesso, Belo Horizonte, MG",
                phone: "(31) 3328-5000"
            },
            {
                name: "Hospital Universitário da Univ. Fed. de Juiz de Fora (HU-UFJF)",
                address: "Rua Catulo Breviglieri, s/n - Santa Catarina, Juiz de Fora, MG",
                phone: "(32) 4009-5324"
            },
            {
                name: "Hospital Infantil João Paulo II",
                address: "Alameda Ezequiel Dias, 345 - Centro, Belo Horizonte, MG",
                phone: "(31) 3239-9000"
            },
            {
                name: "Ambulatório do Hospital das Clínicas de Uberlândia",
                address: "Av. Pará, 1720 - Umuarama, Uberlândia, MG",
                phone: "(34) 3218-2111"
            }
        ]
    },
    "Paraná": {
        services: [
            {
                name: "CPATT - Centro de Pesquisa e Apoio a Travestis e Transexuais",
                address: "Rua Barão do Rio Branco, 465 - Centro, Curitiba, PR",
                phone: "(41) 3304-7567"
            }
        ]
    },
    "Paraíba": {
        services: [
            {
                name: "Complexo Hospitalar de Doenças Infectocontagiosas Dr. Clementino Fraga",
                address: "Rua Esther Borges Bastos, s/n - Jaguaribe, João Pessoa, PB",
                phone: "(83) 3218-5416"
            }
        ]
    },
    "Pará": {
        services: [
            {
                name: "Amb. Trans. da Unidade Espec. em Doenças Infectoparasitárias - Hospital Jean Bitar",
                address: "Rua Cônego Jerônimo Pimentel, 543 - Umarizal, Belém, PA",
                phone: "(91) 3239-3800"
            }
        ]
    },
    "Pernambuco": {
        services: [
            {
                name: "Ambulatório LGBT Darlen Gasparelli - Camaragibe/PE",
                address: "Rua Joaquim Cavalcante de Santana - Bairro Novo do Carmelo, Camaragibe, PE"
            },
            {
                name: "Univ. Fed. Pernambuco - Hospital das Clínicas",
                address: "Avenida Professor Moraes Rego, 1235, 2o andar do bloco E, sala 236, Recife, PE",
                phone: "(81) 2126-3587"
            },
            {
                name: "Ambulatório trans (Petrolina)",
                address: "Rua Cabrobó, s/n - Vila Eduardo, Petrolina, PE"
            },
            {
                name: "Ambulatório LBT do Hospital da Mulher",
                address: "Rod. BR-101 s/n - Curado, Recife, PE",
                phone: "(81) 2011-0100"
            },
            {
                name: "Ambulatório LGBT Patrícia Gomes, Policlínica Lessa de Andrade",
                address: "Estrada dos Remédios, 2416, Madalena, PE",
                phone: "(81) 3355-7805"
            },
            {
                name: "Univ. de Pernambuco, Centro Integrado de Saúde Amaury de Medeiros",
                address: "Rua Visconde de Mamanguape, s/n, Encruzilhada, PE",
                phone: "(81) 3182-7708 | 0800-081-1108"
            }
        ]
    },
    "Piauí": {
        services: [
            {
                name: "Ambulatório Trans do Hospital Getúlio Vargas",
                address: "Av. Frei Serafim, 2352 - Centro, Teresina, PI",
                phone: "(86) 3221-3040"
            }
        ]
    },
    "Rio Grande do Norte": {
        services: [
            {
                name: "Ambulatório de Saúde Integral de Transexuais e Travestis do Rio Grande do Norte - Hospital Giselda Trigueiro",
                address: "Rua Cônego Monte, 110 - Quintas, Natal, RN",
                phone: "(84) 3232-7900"
            }
        ]
    },
    "Rio Grande do Sul": {
        services: [
            {
                name: "Ambulatório T da Atenção Primária à Saúde de Porto Alegre",
                address: "Av. Jerônimo de Ornelas, 55, 2o andar - Santana, Porto Alegre, RS",
                phone: "(51) 3289-2555 | (51) 9938-3572"
            },
            {
                name: "Ambulatório de Identidade de Gênero do Grupo Hospitalar Conceição",
                address: "Rua Álvares Cabral, 429 - Bairro Cristo Redentor, Porto Alegre, RS",
                phone: "(51) 3255-1726"
            },
            {
                name: "PROTIG - Programa de Identidade de Gênero – Hospital de Clínicas de Porto Alegre da UFRGS",
                address: "Rua Ramiro Barcelos, 2350 - Santa Cecília, Porto Alegre, RS",
                phone: "(51) 3359-8000"
            }
        ]
    },
    "Rio de Janeiro": {
        services: [
            {
                name: "Amb. de Saúde Int. de Travestis e Transexuais João W. Nery",
                address: "Av. Ernani do Amaral Peixoto, 169 - Centro, Niterói, RJ",
                phone: "(21) 2717-8140"
            },
            {
                name: "PROSAIM - Universidade Federal Fluminense",
                address: "Rua Des. Ellis Hermydio Figueira, 783 - Aterrado, Volta Redonda, RJ",
                phone: "(24) 3076-8700"
            },
            {
                name: "UERJ – Hospital Universitário Pedro Ernesto",
                address: "Boulevard 28 de Setembro, 77 - Vila Isabel, Rio de Janeiro - RJ",
                phone: "(21) 2868-8000"
            },
            {
                name: "Instituto Estadual de Diabetes e Endocrinologia Luiz Capriglione",
                address: "Rua Moncorvo Filho, 90 - Centro, Rio de Janeiro - RJ",
                phone: "(21) 2332-7159"
            }
        ]
    },
    "Santa Catarina": {
        services: [
            {
                name: "Centro de Saúde Saco Grande",
                address: "Rod. Virgílio Várzea, s/n - Saco Grande, Florianópolis, SC",
                phone: "(48) 3238-0608"
            },
            {
                name: "Centro de Saúde Campeche",
                address: "Rua da Capela, s/n - Campeche, Florianópolis, SC",
                phone: "(48) 3237-4524"
            },
            {
                name: "Centro de Saúde Estreito",
                address: "Rua Araci Vaz Callado, 742 - Estreito, Florianópolis, SC",
                phone: "(48) 3244-1200"
            }
        ]
    },
    "Sergipe": {
        services: [
            {
                name: "Ambulatório de Saúde Integral Trans do Hosp. UF de Sergipe",
                address: "Rua Cláudio Batista, 505 - Palestina, Aracaju, SE",
                phone: "(79) 2105-1700"
            }
        ]
    },
    "São Paulo": {
        services: [
            {
                name: "Rede Sampa Trans",
                notes: "Centros de atendimento disponíveis por região",
                website: "https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Rede_SAMPA_Trans_16_6_2023.pdf"
            },
            {
                name: "Núcleo de Estudos, Pesquisa, Ext. e Assist. à Pessoa Trans, da Unifesp (Núcleo Trans Unifesp)",
                address: "Rua Napoleão de Barros, 859 - Vila Clementino, São Paulo, SP",
                website: "https://nucleotrans.unifesp.br/"
            },
            {
                name: "AMBGEN - Ambulatório de Gênero e Sexualidades da UNICAMP",
                address: "Rua Vital Brasil, 251- Hospital das Clínicas- Faculdade de Ciências Médicas, São Paulo, SP",
                phone: "(19) 3521-8990",
                email: "ambgen.unicamp@gmail.com"
            },
            {
                name: "Hospital de Clínicas da Faculdade de Medicina da USP",
                address: "Rua, Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo, SP",
                phone: "(11) 2661-0000"
            },
            {
                name: "Ambulatório de Saúde Integral para Travestis e Transexuais do CRT (ASITT/CRT-SP)",
                address: "Rua Santa Cruz, 81 - Vila Mariana, São Paulo, SP",
                phone: "(11) 5087-9911"
            },
            {
                name: "AMTIGOS - Amb. Transdisciplinar de Identidade de Gênero e Orientação Sexual do IPQ-HCFMUSP",
                address: "Rua Dr. Ovídio Pires de Campos, 785 - Cerqueira César, São Paulo, SP",
                email: "amtigos.ipq@hc.fm.usp.br"
            },
            {
                name: "Ambulatório Trans do Hospital Guilherme Álvaro (Santos - SP)",
                address: "Rua Oswaldo Cruz, 197 - Boqueirão, Santos, SP",
                phone: "(13) 3202-1300"
            },
            {
                name: "Ambulatório Municipal de Saúde Integral de Travestis e Transexuais (São José do Rio Preto - SP)",
                address: "Rua do Rosário, nº 1903 – Vila Esplanada, São Paulo, SP",
                phone: "(13) 3202-1300"
            },
            {
                name: "AGE - Ambulatório Generidades da Santa Casa de Misericórdia",
                address: "Rua Dr. Cesário Mota Júnior, 112 - Vila Buarque, São Paulo, SP",
                phone: "(11) 98409-5971",
                email: "agesantacasa@gmail.com"
            },
            {
                name: "UBS Santa Cecília",
                address: "Rua Vitorino Carmilo, 599 - Barra Funda, São Paulo, SP",
                phone: "(11) 3826-7970"
            }
        ]
    }
};

export const legalFramework = [
    {
        title: "Portaria n. 457, de 21 de agosto de 2008",
        content: "Define as diretrizes nacionais para o processo transexalizador no Sistema Único de Saúde (SUS), a serem implantadas em todos os estados e na unidade federal."
    },
    {
        title: "Portaria n. 2803, de 19 de novembro de 2013",
        content: "Redefine e amplia o processo transexualizador no Sistema Único de Saúde (SUS)."
    },
    {
        title: "Resolução nº 11, de 18 de dezembro de 2014",
        content: "Estabelece os parâmetros para a inclusão dos itens \"orientação sexual\", \"identidade de gênero\" e \"nome social\" nos boletins de ocorrência emitidos pelas autoridades policiais no Brasil."
    },
    {
        title: "Decreto nº 8.727, de 28 de abril de 2016",
        content: "Dispõe sobre o uso do nome social e o reconhecimento da identidade de gênero de pessoas travestis e transexuais no âmbito da administração pública federal direta, autárquica e fundacional."
    },
    {
        title: "Provimento nº 73/28 de junho de 2018",
        content: "Regulamentou a retificação do registro civil e todos os cartórios de registro de pessoas do Brasil ficaram obrigados a realizar a alteração de nome e marcador de gênero nas certidões de nascimento."
    },
    {
        title: "Portaria nº 1.370, de 21 de junho de 2019",
        content: "Inclui oficialmente na tabela de procedimentos, medicamentos, óteses, próteses e materiais especiais do SUS um novo procedimento relacionado à redesignação sexual de pessoas transmasculinas."
    },
    {
        title: "Portaria nº 1.693, de 10 de maio de 2024",
        content: "Garante que procedimentos de ginecologia, obstetrícia, urologia e proctologia no SUS estejam acessíveis a todas as pessoas, independentemente do sexo registrado, com base na identidade de gênero autodeterminada."
    }
]; 