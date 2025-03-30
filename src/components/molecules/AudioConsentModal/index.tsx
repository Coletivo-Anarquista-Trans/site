"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { useEffect, useState } from "react";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberButton from "@/components/atoms/CyberButton";
import CyberPortrait from "@/components/atoms/CyberPortrait";

export default function AudioConsentModal() {
  const { enableAudio, isAudioEnabled, playArpeggio } = useAudio();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!isAudioEnabled);
  }, [isAudioEnabled]);

  const handleEnable = async () => {
    await enableAudio(); // Wait for audio to be enabled
    // Small delay to ensure audio context is fully ready
    setTimeout(() => {
      playArpeggio();
    }, 100);
  };

  const handleDisable = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="fixed inset-0 bg-background backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <div className="flex min-h-full items-center justify-center p-4 text-center bg-background">
            <CyberContainer>
              <motion.div
                className="relative w-full max-w-md transform overflow-hidden border-accent1 bg-background text-left align-middle shadow-xl"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <CyberPortrait
                  id="audio-consent-modal"
                  text="audio_consent.tsx"
                  nested={
                    <CyberContainer className="border border-accent1 p-6">
                      <div className="flex items-start">
                        <div className="border border-accent1 rounded-full p-1">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent1">
                            <svg
                              className="h-6 w-6 text-accent1"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3
                            className="text-lg font-medium leading-6 text-accent1"
                            id="modal-title"
                          >
                            CONSENTIMENTO DE AUDIO
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-accent1">
                              esse site utiliza efeitos sonoros experimentais
                              que afetar sua experiência de navegação.
                              <br />
                              <br />
                              Você pode ativar/desativar os efeitos sonoros nas
                              configurações
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-end space-x-3">
                        <div className="border border-accent1 p-1">
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent5 focus:outline-none transition-colors"
                            onClick={handleDisable}
                          >
                            desativar sons
                          </button>
                        </div>
                        <div className="border border-accent1 p-1">
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent5 focus:outline-none transition-colors"
                            onClick={handleEnable}
                          >
                            ativar sons
                          </button>
                        </div>
                      </div>
                    </CyberContainer>
                  }
                />
              </motion.div>
            </CyberContainer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
