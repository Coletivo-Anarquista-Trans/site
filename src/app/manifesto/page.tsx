"use client";

import CyberContainer from "@/components/atoms/CyberContainer"
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CyberTooltip from "@/components/atoms/CyberTooltip";
import CyberSpeech from "@/components/atoms/CyberSpeech";
import CyberGlossary from "@/components/organism/CyberGlossary";

export default function Manifesto() {

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [useSearchParams]);

    return (
        <>
            <CyberContainer className="min-h-screen flex flex-col items-start px-4 py-8">
                <CyberContainer className="w-full mx-auto text-accent1 max-w-screen-lg px-4 sm:px-8">
                    <CyberContainer className="p-4 sm:p-8 break-words w-full max-w-4xl">

                        {/* Seção 1 - Finalidade */}
                        <SectionTitle id="section-1" title="1 - Finalidade" />
                        <CyberContainer className="text-center tracking-widest text-base p-2 m-4 w-auto h-auto">
                            <p>
                                <b>O corpo é político, quem não lutar por ele irá perdê-lo para o {''}
                                    <CyberTooltip
                                        word="Cistema"
                                        description="Sistema de opressão que marginaliza corpos dissidentes"
                                        link="#cistema"
                                    />.
                                </b>
                            </p>
                            <p>
                                Construiremos um mundo onde toda pessoa será livre para construir e viver o seu corpo
                                desejado. Desejamos o domínio e livre acesso à produção e uso das tecnologias de afirmação do corpo e da mente.
                            </p>
                            <p>
                                Colocaremos tudo que precisamos para construir nossos corpos nas mãos dos trabalhadores,
                                pessoas trans, queer, não-brancas, neurodivergentes e pessoas com deficiência.
                                <b> As farmácias, a ciência, a internet e seus resultados devem servir a todes, não à lógica de lucro.</b>
                            </p>
                            <p>
                                Liberdade é ter acesso ao básico para poder viver. Um corpo com fome e sem moradia não tem
                                autonomia até essas necessidades serem atendidas. Enquanto isso, nosso mundo produz <b>excesso para poucos bilionários</b> através
                                da <b>escassez induzida para a maioria</b>. Essa é a contradição do <b>Cistema</b> em que vivemos.
                            </p>
                            <p>
                                Excesso para <b>bilionários com riquezas colossais versus a falta de alimento para matar a fome, moradia para viver,
                                    fármacos</b> e técnicas para podermos <b>afirmar o corpo desejado</b> e uma <b>internet livre incentivando a colaboração</b> ao
                                invés do consumo.
                            </p>
                            <p>
                                Nossos corpos são atravessados por essa contradição, sendo corpos trans, com deficiência,
                                neurodivergentes e racializados alvos da marginalização do Cistema, que garante o excesso
                                para os bilionários, acionistas majoritários, e o domínio das tecnologias de afirmação
                                corporal nas mãos de pouquíssimos homens cis-héteros brancos.
                            </p>
                            <p>
                                É da necessidade causada pela <b>escassez induzida pela classe dominante</b> que garante que
                                1% tenha em excesso explorando 99%, provocando a falta de acesso a hormônios, cirurgias, remédios,
                                produtos de higiene, roupas para nossa identidade, mas também falta da comida, da moradia e comunidade
                                para sermos livres, em resumo, <b>das faltas das necessidades básicas atendidas por essa sociedade, que nasce
                                    este coletivo</b>.
                            </p>
                            <br />
                            <p>
                                <b>Destrua o Cistema!</b>
                            </p>
                        </CyberContainer>

                        {/* Seção 2 - Como faremos */}
                        <SectionTitle id="section-2" title="2 - Como faremos" />
                        <CyberContainer className="text-center text-base p-2 m-4 w-auto h-auto">
                            <p>
                                Uma sociedade em que as {''}
                                <CyberTooltip
                                    word="tecnologias de produção do corpo"
                                    description="Técnica e trabalho usado para produzir os corpos para viverem em sociedade hoje"
                                    link="#tecnologias-de-producao-do-corpo"
                                /> estejam nas mãos das pessoas marginalizadas pelo Cistema depende de uma ruptura radical das estruturas que nos excluem do
                                controle dessas tecnologias.
                            </p>
                            <p>Por isso, seguimos os seguintes princípios:</p>
                        </CyberContainer>

                        {/* Subseções de "Como faremos" */}
                        <SubSection id="section-2.1" title="2.1 - Somos anarquistas">
                            <p>
                                Porque não acreditamos em {''}
                                <CyberTooltip
                                    word="vanguardas"
                                    description="Grupos políticos que pretendem controlar o processo revolucionário"
                                    link="#vanguardas"
                                />.
                                Acreditamos na construção e organização das comunidades como forma de cultivar a cooperação
                                sem a dependência de uma estrutura mercadológica, estatal ou partidária para garantir a organização.
                            </p>
                            <p>
                                <b>Buscamos uma sociedade em que a autonomia corporal seja plena, portanto desejamos a total
                                    descentralização do poder econômico, político e a extinção da noção genitalista
                                    cishétero de conformidade entre genital-gameta e identidade</b>, construímos alianças com comunidades e
                                grupos que reforçam este projeto.
                            </p>
                            <p>
                                Líderes têm a função de tornarem-se dispensáveis a longo prazo, empoderando o coletivo para
                                não depender deles.
                            </p>
                        </SubSection>

                        <SubSection id="section-2.2" title="2.2 - Acreditamos no voluntarismo">
                            <p>
                                <b>“De cada um de acordo com sua capacidade”</b>. Seguimos essa máxima, pois o mundo capitalista consome grande parte do nosso
                                tempo e capacidades, <b>precisamos antes sobreviver para lutar.</b>
                            </p>
                            <p>
                                O voluntarismo permite recuos estratégicos, avanços engajados, dedicação naquilo que amamos e manifestação da diversidade
                                de habilidades e desejos. Isso não significa autonomismo, que é a atuação individual dividida.
                                <b> Construímos em coletivo</b>. Acreditamos que a cooperação organizada com habilidades distintas nos leva mais longe.
                            </p>
                        </SubSection>


                        <SubSection id="section-2.3" title="2.3 - Construímos comunidade">
                            <p>
                                <b>“Para cada um de acordo com a sua necessidade”</b>. Trabalhamos coletivamente para
                                fortalecer nossa comunidade como base para uma experiência social capaz de atender nossas necessidades.
                            </p>
                            <p>
                                <b>Nosso objetivo é uma comunidade horizontal em que todos participem das decisões e colham os
                                    frutos delas ao mesmo tempo que a constroem juntos.</b> Faremos ação direta, usando nosso trabalho
                                para contribuir com a comunidade sem depender do mercado e do estado que há tempos tem abandonado nossa comunidade.
                            </p>
                        </SubSection>

                        <SubSection id="section-2.4" title="2.4 - Produzimos arte">
                            <p className="">
                                Somos hackers. “Hackear é abstrair. Abstrair é produzir o plano sobre o qual coisas
                                diferentes podem entrar em relação” (McKenzie Wark). <b>Nossa arte produz relações</b>.
                                Sabemos que grande parte da nossa comunidade vive nas ruas, e uma das formas de resistir e
                                persistir a presença dos nossos corpos nas ruas é criando a nossa própria cultura, linguagem
                                e formas de expressão.
                            </p>

                            <br />

                            <p>
                                A arte é um mecanismo humano de expressão, que construído com intenção política pode ser um instrumento de
                                luta muito importante. <b>É capaz de produzir memória, ancestralidade e perspectivas de novos mundos.</b> Enquanto coletivo,
                                produziremos arte política e educacional que converse diretamente com a nossa comunidade (zines, lambes e o que mais der na telha),
                                incetivaremos e divulgaremos as ocupações e movimentações queer culturais e marginais diversas.
                            </p>
                            <p>
                                <b>No mundo virtual, toda interface feita por nós será feita para produzir relações que constroem coletividade e resistência da nossa comunidade</b>.
                                Não recuaremos diante do roubo feito pelas big techs das artes no território da internet. As Inteligências Artificiais têm sido usadas para se apropriar
                                do trabalho artístico e gerar lucro para bilionários.
                                Mostraremos a verdadeira potência da IA e da arte marginalizada, colocando suas tecnologias contra os magnatas virtuais, ironizando-os.
                            </p>
                        </SubSection>

                        <SubSection id="section-2.5" title="2.5 - Vemos o mundo de uma Transperspectiva">
                            <p>
                                <b>Cisgenereidade é compulsória! O presente é apenas potencial e o futuro é a realização ou contenção dele.</b> Rejeitamos
                                a perspectiva fatalista cisheteronormativa em que tudo que somos é um produto “biológico” determinado por nossas genitais
                                ou gametas fechado em uma possibilidade binária.
                            </p>
                            <p>
                                <b>Um corpo tem infinitas possibilidades de existir, que hoje estão limitadas pela falta de domínio às técnicas de modificação
                                    corporal e pela obrigação imposta de gerar filhos.</b> Queremos libertar essas potências para além do binário e do gênero como limitantes.
                            </p>
                            <p>
                                Desejamos <b>libertar nossos afetos para além da cisheterossexualidade</b> que existe para servir à reprodução
                                compulsória de mão-de-obra para o capitalismo. <b>Precisamos parar de falar da revolução em termos de futuro,
                                    esse peso no futuro atribui o processo revolucionário somente ao processo de classe. O que corpos trans fazem e
                                    resistem já é por si uma revolução.</b>
                            </p>
                            <br />
                            <p>
                                <b>A revolução é agora e estão atacando ela. O que você fará?</b>
                            </p>
                        </SubSection>

                        {/* Seção 3 - Nossos objetivos */}
                        <SectionTitle id="section-3" title="3 - Nossos objetivos" />

                        <SubSection id="section-3.1" title="3.1 - Nossa comunidade tem fome">
                            <p>
                                <b>Não existe liberdade onde se tem fome</b>. Faltam oportunidades para pessoas trans, com deficiência
                                e neurodivergentes poderem matar sua fome. Enquanto isso, há <b>supermercados cheios com preços inacessíveis</b>,
                                porque o Cistema produz a comida para dar lucro e não para matar fome.
                            </p>
                            <p>
                                Queremos o fim dessa lógica. Necessidades básicas não são para dar lucro, o trabalho humano deve atender
                                as necessidades e não disperdício como parte da lógica do lucro.
                            </p>
                        </SubSection>

                        <SubSection id="section-3.2" title="3.2 - Por uma saúde transgênera">
                            <p>
                                <b>Saúde é para garantir autonomia e não só para tratar sintomas.</b> Queremos livre acesso a hormônios,
                                cirurgias e fármacos com conscientização do uso e esforço para redução dos colaterais indesejados e
                                maximização dos desejados. Enquanto a técnica for refém das necessidades do Cistema, a finalidade acima
                                não poderá se realizar para nossos corpos marginalizados.
                            </p>
                            <p>
                                <b>Precisamos de pessoas trans, neurodivergentes e pessoas com deficiência participando da produção da sua própria saúde
                                    como agentes ativos </b>de uma saúde buscando aumentar o potencial dos corpos e não paciente-passivo da saúde capitalista do {''}
                                <CyberTooltip word="Cistema" description="Bando de cuzões. ex: Elon Musk" />, que só trata os sintomas dos adoecimentos causados por ele
                                com a finalidade de nos tornar mais produtivos e não nos dar autonomia.
                            </p>
                            <br />
                            <p>
                                <b>Saúde não deve ser mercadoria.</b>
                            </p>
                        </SubSection>

                        <SubSection id="section-3.3" title=" 3.3 - Por moradias para nossos corpos">
                            <p>
                                <b>Não existe liberdade sem ter um teto</b>. Precisamos morar. Os corpos marginalizados são
                                negados direito de ter um <b>abrigo</b> em um <b>lar próprio</b>, somos expulsos de nossas casas e
                                desacolhidos pelo Estado e o mercado.
                            </p>
                            <p>
                                A moradia para nossos corpos não está contemplada por essas lógicas, que produz<b> {''}<CyberTooltip word="casas sem pessoas e pessoas sem casas"
                                    description="Censo 2022: imóveis desocupados representam 12 vezes a população de rua da cidade de SP" /></b>. Nossa comunidade é uma das mais
                                afetadas por essa escassez produzida para dar lucro. Por isso, <b>lutamos por uma lógica de propriedade que permita que ninguém morra de frio nas
                                    ruas.</b>
                            </p>
                            <br />
                            <p>
                                <b>Queremos nossos lares.</b>
                            </p>
                        </SubSection>

                        <SubSection id="section-3.4" title="3.4 - Descentralização das tecnologias de generificação">
                            <p>
                                <b>Corpos são políticos! Não tirem nossos corpos de nós.</b> Homem e mulher é um produto da cisgenerificação compulsória.
                                Próteses, fármacos e procedimentos estéticos de afirmação de gênero <b>são livres para pessoas cis e restringidos para
                                    pessoas trans</b>. Isso é uma consequência direta do Cistema.
                            </p>
                            <br />
                            <p>
                                <b>Queremos o fim disso tudo.</b>
                            </p>
                            <p>
                                A descentralização das tecnologias de modificação corporal depende do fim do capitalismo e do patriarcado.
                                Portanto, <b>defendemos a propriedade coletiva de todos meios de produção e reprodução da vida, de construção corporal e da
                                    consciência</b> como das terras onde a comida nasce, das fábricas onde fazemos as ferramentas e bens que auxiliam a vida, e dos meios de
                                comunicação que nos ajudam a entender nossos papeis no mundo e na comunidade.
                            </p>
                        </SubSection>

                        <SubSection id="section-3.5" title="3.5 - Internet livre como meio de produção da consciência">
                            <p>
                                A internet assumiu um papel central em como nos informamos sobre o mundo. O controle do fluxo dessa informação se mantém oculto
                                por trás dos algoritmos dominados por big techs, produzindo percepções falsas sobre a realidade e condicionando a verdade aos primeiros
                                resultado de ferramentas de pesquisas, que mostram resultados patrocinados e de inteligência artificial,
                                atendendo interesses privados focados no lucro e não do coletivo.
                            </p>
                            <p>
                                <b>A centralização da internet em pouquíssimos sites e apps desses bilionários destruiu as formas descentralizadas</b> antes
                                conhecidas de blogs, sites, fóruns em que as cibercomunidades tinham <b>autonomia para construir seus ciberespaços</b> sem ter
                                seus dados roubados por algoritmos que servem à ganância de bilionários digitais.
                            </p>
                            <p>
                                <b>Queremos uma internet livre, descentralizada, em que os algoritmos sejam abertos, transparentes, programados por nós e atuando
                                    para incentivar a colaboração para atender as necessidades das pessoas</b> e não para espalhar mentiras (fake news) ou incentivar uma
                                cultura de consumo. <b>Devemos ter controle da interface e dos meios de produzi-la.</b>
                            </p>
                            <p>
                                Só assim garantimos que as informações e seu fluxo estejam à serviço das necessidades das pessoas e não do enriquecimento de uma minoria
                                bilionária que nos explora e usa a internet como meio de nos dominar. Também acreditamos na possibilidade de se <b>construir um corpo através
                                    de um espaço extracorporal</b>, uma simulação do que se é/ou se deseja ser na virtualização do ser. <b>Não hierarquizamos e definimos a linha
                                        que traça a distinção entre os espaços materiais e os virtuais.</b>
                            </p>
                            <p>
                                Por isso, <b>disputaremos a internet como forma de produzir a si próprio</b>, construindo e reforçando novas tecnologias de produção de si
                                virtualmente, podendo também servir como ferramenta para que transições virtuais possam se materializar fora dela.
                            </p>
                        </SubSection>

                        <SubSection id="section-3.6" title="3.6 - Despatologização da vida">
                            <p>
                                <b>Neurodivergência não é patologia, patológico é um sistema que lê as diferenças como
                                    doença.</b>
                                O Cistema tenta nos confundir ao transformar suas mazelas em doenças e diagnósticos para
                                atribuir o seu fracasso aos indivíduos, chamando-os de doentes mentais.
                                Os fármacos têm a finalidade de tornar neurodivergentes do sistema em corpos produtivos.
                            </p>
                            <p>
                                Queremos libertar as mentes destes fármacos. <b>Fármacos devem atender as necessidades
                                    individuais e coletivas, não do sistema capitalista para manter a lógica de produção de
                                    lucro.</b>
                                Lutamos pelo <b>livre acesso e domínio dos fármacos</b>, pelo <b>fim de uma lógica de
                                    trabalho adoecedora</b> que
                                consome todo o tempo de vida das pessoas para enriquecer uma minoria, enquanto resta
                                migalhas para a maioria.
                            </p>
                        </SubSection>

                        <SubSection id="section-3.7" title="3.7 - Pelo direito à reprodução queer">
                            <p>
                                <b>Se um corpo pode vir de nós, então somos nossos próprios mestres.</b> A tecnologia nos possibilitou hackear nossos corpos para
                                reproduzirmos sem depender da heterossexualidade. Essas tecnologias são restringidas pelo tecnopatriarcado para poucos. <b>Ter filhos deve ser
                                    uma possibilidade e escolha para qualquer corpo através das tecnologias de reprodução.</b>
                            </p>
                            <p>
                                A cisheteronormatividade jamais permitirá que utilizemos essas tecnologias, pois, com elas em nossas mãos, a <b>cisheterossexualidade
                                    deixa de ter sentido na sua existência, justificada hoje pela concentração para si da capacidade reprodutiva.</b>
                            </p>
                        </SubSection>

                        <CyberContainer className="w-full flex justify-center">
                            <CyberSpeech>
                                <CyberGlossary title="Glossário" />
                            </CyberSpeech>
                        </CyberContainer>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}

function SectionTitle({ id, title }: { id: string; title: string }) {
    return (
        <CyberContainer className="w-full flex justify-center">
            <CyberContainer
                id={id}
                unevenBorders
                glowingBorders
                className="inline-block text-2xl sm:text-3xl md:text-4xl p-4 m-14 text-center break-keep whitespace-nowrap"
            >
                {title}
            </CyberContainer>
        </CyberContainer>
    );
}

function SubSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <CyberContainer className="text-center text-base tracking-widest p-2 m-4 w-auto h-auto">
            <CyberContainer
                id={id}
                className="text-center text-2xl p-2 m-4 mb-6 w-fit mx-auto border-b-2 border-b-accent1"
            >
                {title}
            </CyberContainer>
            {children}
        </CyberContainer>
    );
}