// Dados das casas de acolhimento LGBTQIA+
export interface ShelterHouse {
    id: string;
    name: string;
    description: string;
    address: string;
    email?: string;
    phone?: string;
    instagram?: string;
    website?: string;
}

export const shelterHouses: ShelterHouse[] = [
    {
        id: "casa-1",
        name: "Casa 1",
        description: "Casa de acolhida de jovens LGBT+, centro cultural e clínica de saúde mental gratuita.",
        address: "Rua Adoniran Barbosa, 151 - Bela Vista, São Paulo - SP",
        email: "contato@casaum.org",
        instagram: "@casaum",
        website: "https://www.casaum.org"
    },
    {
        id: "casa-nem",
        name: "Casa Nem",
        description: "Centro de acolhida LGBTQIAPN+ (com atendimento noturno).",
        address: "Rua Dois de Dezembro, 9 - Flamengo, Rio de Janeiro, RJ",
        phone: "(21) 96519-2569",
        instagram: "@casanem_"
    },
    {
        id: "casa-florescer",
        name: "Casa Florescer",
        description: "Centro de acolhida para travestis e mulheres transexuais em situação de vulnerabilidade.",
        address: "Rua Prates, 1101 - Bom Retiro, São Paulo - SP",
        phone: "(11) 3228-0502",
        instagram: "@casaflorescer1"
    },
    {
        id: "casa-joao-nery",
        name: "Casa João Nery",
        description: "Centro de acolhida para homens trans e pessoas transmasculinas em situação de vulnerabilidade.",
        address: "Rua Carlos Escobar, 86 - Santana, São Paulo - SP",
        email: "caejoaonery@gmail.com",
        instagram: "@cajoaonery"
    },
    {
        id: "casa-miga",
        name: "Casa Miga",
        description: "Centro de referência e casa de acolhimento para pessoas LGBTIA+ do Norte e refugiadas expulsas de casa e/ou em situação de vulnerabilidade social.",
        address: "Rua Silva Ramos, 839 - Praca 14 de Janeiro, Manaus - AM",
        email: "contato@casamiga.org",
        instagram: "@casamigalgbt",
        website: "https://linktr.ee/casamigalgbt"
    },
    {
        id: "casa-rosa",
        name: "Casa Rosa",
        description: "Casa de apoio ao público LGBTQIA+.",
        address: "Sobradinho - Quadra 17, Nº 45, Brasília - DF",
        email: "fundacaocasarosa@gmail.com",
        phone: "(61) 99220-3745",
        instagram: "@casarosadf"
    },
    {
        id: "casinha",
        name: "Casinha",
        description: "Centro de acolhimento para pessoas trans e travestis.",
        address: "Ladeira da Glória, 26 bloco 3, Rio de Janeiro, RJ",
        email: "contato@casinha.ong"
    }
]; 