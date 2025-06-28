"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { shelterHouses, ShelterHouse } from "@/data/shelters";

export default function CasasAcolhimento() {
    const renderShelterHouse = (shelter: ShelterHouse) => (
        <section key={shelter.id} id={shelter.id}>
            <h2 className="text-xl font-bold text-accent5 mb-4">{shelter.name}</h2>
            <p className="text-accent2 mb-4">
                {shelter.description}
            </p>
            <div className="space-y-2">
                <ul className="list-disc list-inside">
                    <li>Endereço: {shelter.address}</li>
                    {(shelter.email || shelter.phone) && (
                        <li>
                            Contato: {shelter.email && shelter.phone
                                ? `${shelter.email} | ${shelter.phone}`
                                : shelter.email || shelter.phone
                            }
                        </li>
                    )}
                    {shelter.instagram && (
                        <li>Instagram: {shelter.instagram}</li>
                    )}
                    {shelter.website && (
                        <li>Site: <a href={shelter.website} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">{shelter.website}</a></li>
                    )}
                </ul>
            </div>
        </section>
    );

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Casas de Acolhimento
                    </CyberContainer>

                    <CyberContainer className="text-accent1 space-y-6">
                        {shelterHouses.map((shelter) => renderShelterHouse(shelter))}
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 