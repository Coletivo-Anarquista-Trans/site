//app/coletivos/page.tsx
"use client";

import { motion } from "framer-motion";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberCommunityCard from "@/components/molecules/CyberCommunityCard";
import { communityByCategory } from "@/data/community";

export default function Coletivos() {

  const coletivosData = communityByCategory.Coletivos || [];

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-4xl">
        <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
          Coletivos
        </CyberContainer>

        <CyberContainer className="text-accent1 mb-6 text-center">
          Coletividades e redes trans para serem circuladas
          <br />
          <span className="text-accent5">
            Faz parte de um coletivo? Troca ideia com a gente lá no: cats-trans@riseup.net
          </span>
        </CyberContainer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <CyberContainer className="border border-accent1 p-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-accent3">NETWORK STATUS:</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">CONNECTED</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent3">NODES: {coletivosData.length}</span>
                <span className="text-accent3">PROTOCOL: QUEER-T4T</span>
              </div>
            </div>
          </CyberContainer>
        </motion.div>

        <div className="space-y-2">
          {coletivosData.map((community, index) => (
            <CyberCommunityCard
              key={community.id}
              community={community}
              index={index}
            />
          ))}
        </div>
      </CyberContainer>
    </CyberContainer>
  );
}