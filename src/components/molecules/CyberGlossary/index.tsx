import CyberContainer from "../../atoms/CyberContainer";
import {JSX} from "react";

interface CyberGlossaryProps {
    title: string;
}

interface GlossaryItem {
    id: string;
    title: string;
    description: string | JSX.Element;
}

const glossary: GlossaryItem[] = [
    {
        id: "cistema",
        title: "Cistema",
        description: (
            <>
                <div>
                    Chamamos de Cistema o mundo que vivemos hoje. O mundo de hoje é feito de barreiras que restringem
                    acessos.
                    <ul className="list-inside list-disc ml-4">
                        <li>
                            <b>O capitalismo</b> restringe acesso ao trabalho, à moradia, à comida e tudo que produzimos
                            para concentrar riqueza nas mãos da minoria da população;
                        </li>
                        <li>
                            <b>O binarismo e a cisheterossexualidade</b> restringem nossa técnica e imaginação para além
                            das dualidades homem x mulher;
                        </li>
                        <li>
                            <b>O estado</b> nos restringe das decisões que podem mudar essa realidade ao nos reprimir
                            com a polícia e tomar as decisões através de políticos que não nos representam;
                        </li>
                        <li>
                            <b>O vetorialismo</b> é um sistema em que uma classe domina os meios de produção de
                            informação e fluxos de comunicação - restringe as informações e nos direciona informações
                            falsas e manipuladas para nos convencer das inverdades da classe dominante.
                        </li>
                    </ul>
                </div>
                <b>A soma dessas estruturas é o Cistema.</b>
            </>
        ),
    },
    {
        id: "tecnologias-de-producao-do-corpo",
        title: "Tecnologias de produção do corpo",
        description: (
            <>
                Entendemos qualquer técnica e trabalho usado para produzir os corpos para viverem em sociedade hoje como
                ‘tecnologias de produção do corpo’.
                <br/>
                Por exemplo: Produtos de higiene, comida, moradia, hormônios, remédio, fármacos, roupas, cirurgias são
                todos produzidos pelo
                trabalho coletivo de várias pessoas, empregando tecnologias como química, biologia, medicina etc.
            </>
        ),
    },
    {
        id: "vanguardas",
        title: "Vanguardas",
        description: (
            <>
                Entendemos por vanguardas, grupos políticos que pretendem controlar o processo revolucionário, tomando
                as decisões pelo povo,
                e que se pretendem como mais esclarecidas do que qualquer outro grupo político em relação ao processo de
                ruptura com o Cistema.
            </>
        ),
    },
];

function GlossarySection({id, title, description}: GlossaryItem) {
    return (
        <div id={id} className="mb-4 tracking-widest text-center">
            <p>
                <b>{title}:</b>
            </p>
            {description}
        </div>
    );
}

export default function CyberGlossary({title}: CyberGlossaryProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-2 text-accent5">
            <CyberContainer
                          id="section-1"
                          className="border border-accent5 p-1 m-16 max-w-48 sm:max-w-48 md:max-w-64 mx-auto"
                        >
                          <CyberContainer className="border border-accent5 text-2xl sm:text-3xl p-2 md:text-4xl break-keep whitespace-nowrap">
                            {title}
                          </CyberContainer>
                        </CyberContainer>


            <p className="text-accent4">ᓚᘏᗢ ~nya</p>

            {glossary.map((item, index) => (
                <GlossarySection key={index} id={item.id} title={item.title} description={item.description}/>
            ))}
        </div>
    );
}