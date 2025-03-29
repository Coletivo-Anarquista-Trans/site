"use client";

import React from 'react';
import CyberImage from "@/components/molecules/CyberImage";
import CyberContainer from '@/components/atoms/CyberContainer';

const Page = () => {
    return (
        <CyberContainer className={"bg-background min-h-screen mb-8 text-foreground flex flex-col items-center justify-items-center"}>
            <h1 className="text-3xl font-bold mb-4">Arquivos</h1>
            <h2 className="text-2xl mb-4">Clique nos títulos para acessar os livros</h2>          
              <div className="flex flex-row gap-4">
                <CyberContainer 
                    id="livro 1" unevenBorders glowingBorders
                    className="flex flex-col gap-8 items-center sm:items-start border-4 border-solid border-foreground w-48 h-80">
                    <CyberImage
                        path="/trans-archives/comoHackear.jpg"
                        text="Como Hackear: Um manual para derrubar o sistema"
                        width={150} 
                        height={100}  
                        url="https://docs.google.com/document/d/1sBgqRi2aoBhSZ7qPE6PLyyEEyeac1ExmrprAc5O4OUQ/edit?tab=t.0#heading=h.40cqyoe39nq"
                        className="mb-4 justify-items-center"
                    />
                </CyberContainer>
                <CyberContainer 
                    id="livro 2" unevenBorders glowingBorders
                    className="flex flex-col gap-8 items-center border-4 border-solid border-foreground w-48 h-80">
                    <CyberImage
                        path="/trans-archives/diariodeUmaciborgue.png"
                        text="Diário de uma ciborgue:<br />O corpo virtual e material como espaço político numa visão ciberfeminista"
                        width={150} 
                        height={100}  
                        url="https://docs.google.com/document/d/1njyeH000ht7PCrGDaPXsVp53zJfAlRQgWipZJXpv5Pw/edit?tab=t.0#heading=h.sa0lg6ud6qbk"
                        className="mb-4 justify-items-center"
                    />
                </CyberContainer>
                <CyberContainer 
                    id="livro 3" unevenBorders glowingBorders
                    className="flex flex-col gap-8 items-center border-4 border-solid border-foreground w-48 h-80">
                    <CyberImage
                        path="/trans-archives/umManifestohacker.jpg"
                        text="Um manifesto hacker"
                        width={150} 
                        height={100}  
                        url="https://baixacultura.org/wp-content/uploads/2024/02/ummanifesto_miolo.pdf"
                        className="mb-4 justify-items-center"
                    />
                </CyberContainer>
            </div>
        </CyberContainer>
    );
};

export default Page;
