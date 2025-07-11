"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberResourceIcon from "@/components/atoms/CyberResourceIcon";
import CyberDropdown from "@/components/molecules/CyberDropdown";
import { servicesByState, legalFramework, ServiceLocation } from "@/data/saude-trans/services";

export default function ServicosPublicos() {
    const renderServiceContent = (services: ServiceLocation[]) => (
        <div className="space-y-4">
            {services.map((service, index) => (
                <div key={index} className="border border-accent1 p-4">
                    <h3 className="text-lg font-bold text-accent5 mb-3">{service.name}</h3>
                    <ul className="list-disc list-inside space-y-1">
                        {service.address && (
                            <li>Endereço: {service.address}</li>
                        )}
                        {service.phone && (
                            <li>Telefone: {service.phone}</li>
                        )}
                        {service.email && (
                            <li>E-mail: {service.email}</li>
                        )}
                        {service.website && !service.notes && (
                            <li>
                                Site: <a href={service.website} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">{service.website}</a>
                            </li>
                        )}

                    </ul>
                    {service.website && service.notes && (
                        <div className="mt-3 space-y-2">
                            <p className="text-accent3 text-sm">{service.notes}:</p>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href={service.website} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    {service.name === "Rede Sampa Trans" ? "Documento oficial com lista de centros" : service.website}
                                </a>
                            </div>
                        </div>
                    )}
                    {service.notes && !service.website && (
                        <div className="mt-3">
                            <p className="text-accent3 text-sm">{service.notes}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Serviços Públicos de Saúde
                    </CyberContainer>

                    <CyberContainer className="text-accent1 mb-6">
                        <p className="font-bold mb-4">
                            Dispositivos legais para a população trans no Brasil
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            {legalFramework.map((item, index) => (
                                <li key={index}>{item.title} - {item.content}</li>
                            ))}
                        </ul>
                        <br />
                        <span className="text-accent3 text-sm">Acesse: <a className="text-accent3 hover:underline" href="https://antrabrasil.org/2020/07/27/como-acessar-o-sus-para-questoes-de-transicao/" target="_blank" rel="noopener noreferrer">como acessar o SUS para questões de transição</a></span>
                    </CyberContainer>

                    {/* Services by Region */}
                    <CyberContainer className="space-y-4">
                        <h2 className="text-xl font-bold text-accent5 mb-4">Serviços por região</h2>
                        <span className="text-accent3 text-sm">Fonte: <a className="text-accent3 hover:underline" href="https://www.saudelgbtqia.com/assistenciaestadual" target="_blank" rel="noopener noreferrer">ambulatórios estaduais de saúde trans e centros de acolhimento LGBTQIA+</a></span>

                        {Object.entries(servicesByState).map(([state, stateData]) => (
                            <CyberDropdown
                                key={state}
                                title={state}
                                content={renderServiceContent(stateData.services)}
                                className="w-full max-w-4xl"
                            />
                        ))}
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 