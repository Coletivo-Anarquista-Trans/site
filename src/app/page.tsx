"use client";

import { useTheme } from "@/context/ThemeContext";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberTerminal from "@/components/atoms/CyberTerminal";
import CyberDrone from "@/components/molecules/CyberDrone";
import CyberPortrait from "@/components/atoms/CyberPortrait";
import { motion, AnimatePresence } from "framer-motion";
import CyberButton from "@/components/atoms/CyberButton";
import CyberBig from "@/components/molecules/CyberBig";
import Link from "next/link";
import { useState } from "react";
import CyberAudioControl from "@/components/molecules/CyberAudioControl";
import { useAudio } from "@/context/AudioContext";
import { useEffect } from "react";
import useIsMobile from "@/utils/useIsMobile";


export default function Home() {
  const { theme } = useTheme();
  const [isForumModalOpen, setIsForumModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { playButtonSelect } = useAudio();


  const isMobile = useIsMobile();



  return (
    <>
      <CyberContainer className="bg-background text-accent1 flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-12 px-4 py-8 lg:py-0 lg:px-0">
        {/* Portrait Section */}
        <CyberContainer className="justify-center items-center w-full lg:w-auto -mx-4 lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center mt-8 lg:mt-0"
          >
            {" "}
            {!isMobile && (
              <CyberContainer className="border border-accent1 p-1 fixed top-0 right-0">
                <CyberContainer className="border border-accent1">
                </CyberContainer>
              </CyberContainer>
            )}
            <CyberPortrait
              id="1"
              text="Coletivo-Anarquista-Trans.tsx"
              altText="Cyber Portrait 1"
              nested={
                <CyberContainer className="w-full min-w-[90vw] sm:min-w-[80vw] md:min-w-[70vw] lg:min-w-[60vw] xl:min-w-[50vw] 2xl:min-w-[42rem] max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[42rem]">
                  <CyberTerminal />
                </CyberContainer>
              }
            />
          </motion.div>
        </CyberContainer>

        {/* Navigation Links */}
        <CyberContainer className="lg:h-screen flex flex-col justify-center items-center gap-4 sm:gap-6 py-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <Link href="/manifesto" className="block w-full" >
              <CyberBig
                text="manifesto"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Link href="/recursos" className="block w-full">
              <CyberBig
                text="recursos"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Link href="/blog" className="block w-full" >
              <CyberBig
                text="blog"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="focus:outline-none focus:ring-2 focus:ring-accent1 w-full"
            >
              <CyberBig
                text="fale conosco"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full"
          >
            <button
              onClick={() => setIsForumModalOpen(true)}
              className="focus:outline-none focus:ring-2 focus:ring-accent1 w-full"
            >
              <CyberBig
                text="forum"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
            </button>
          </motion.div>{" "}
          <div className="flex flex-row gap-4">
            {isMobile && <CyberDrone floating={false} />}
            {isMobile && <CyberAudioControl floating={false} />}
          </div>
        </CyberContainer>

        {!isMobile && <CyberAudioControl />}
        {!isMobile && <CyberDrone />}
      </CyberContainer>
      {/* Forum Modal */}
      <AnimatePresence>
        {isForumModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="fixed inset-0 bg-background backdrop-blur-[2px]"
              onClick={() => setIsForumModalOpen(false)}
              aria-hidden="true"
            />
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-background">
              <CyberContainer className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <motion.div
                  className="relative w-full transform overflow-hidden border-accent1 bg-background text-left align-middle shadow-xl"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <CyberPortrait
                    id="forum-modal"
                    text="forum.rs"
                    onClose={() => setIsForumModalOpen(false)}
                    nested={
                      <CyberContainer className="border border-accent1 p-4 sm:p-6">
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
                                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3
                              className="text-lg font-medium leading-6 text-accent1"
                              id="modal-title"
                            >
                              EM BREVE
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-accent1">
                                Estamos desenvolvendo um forum para ser
                                utilizado pela comunidade trans. Para saber
                                mais, entre em contato conosco... Ou aguarde
                                notícias ;3
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                          <div className="border border-accent1 p-1">
                            <button
                              type="button"
                              className="px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent1 focus:outline-none transition-colors"
                              onClick={() => setIsForumModalOpen(false)}
                            >
                              beleza
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
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="fixed inset-0 bg-background backdrop-blur-[2px]"
              onClick={() => setIsContactModalOpen(false)}
              aria-hidden="true"
            />
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-background">
              <CyberContainer className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <motion.div
                  className="relative w-full transform overflow-hidden border-accent1 bg-background text-left align-middle shadow-xl"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <CyberPortrait
                    id="contact-modal"
                    text="fale conosco"
                    onClose={() => setIsContactModalOpen(false)}
                    nested={
                      <CyberContainer className="border border-accent1 p-4 sm:p-6">
                        <div className="flex items-center justify-center">
                          <div className="text-center">
                            <h3
                              className="text-lg font-medium leading-6 text-accent1 break-all"
                              id="modal-title"
                            >
                              cats-trans@riseup.net
                            </h3>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                          <div className="border border-accent1 p-1">
                            <button
                              type="button"
                              className="px-4 py-2 text-sm font-medium border border-accent1 text-accent1 hover:bg-accent1 hover:text-accent1 focus:outline-none transition-colors"
                              onClick={() => setIsContactModalOpen(false)}
                            >
                              fechar
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
    </>
  );
}
