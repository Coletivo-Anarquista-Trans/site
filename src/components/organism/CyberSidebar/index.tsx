"use client";

import CyberMiniButton from "@/components/atoms/CyberMiniButton";
import { useAudio } from "@/context/AudioContext";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { useTheme } from "@/context/ThemeContext";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CyberContainer from "../../atoms/CyberContainer";
import {
  AboutIcon,
  ArchiveIcon,
  BlogIcon,
  CloseIcon,
  FolderIcon,
  HamburgerIcon,
  HomeIcon,
  TransgenderIcon
} from "./CyberSidebarIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const subContainerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const subItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  exit: { opacity: 0, x: -10 },
};

interface CyberSection {
  id: string;
  parent: string;
  label: string;
}

type ExpandedNodes = {
  "manifesto-root": boolean;
  "saude-trans-root": boolean;
  "use-e-compartilhe-root": boolean;
};

const HARDCODED_SECTIONS = {
  manifesto: [
    { id: "section-1", parent: "manifesto", label: "1 - Finalidade" },
    { id: "section-2", parent: "manifesto", label: "2 - Como faremos" },
    {
      id: "section-2.1",
      parent: "manifesto",
      label: "2.1 - Somos anarquistas",
    },
    {
      id: "section-2.2",
      parent: "manifesto",
      label: "2.2 - Acreditamos no voluntarismo",
    },
    {
      id: "section-2.3",
      parent: "manifesto",
      label: "2.3 - Construímos comunidade",
    },
    { id: "section-2.4", parent: "manifesto", label: "2.4 - Produzimos arte" },
    {
      id: "section-2.5",
      parent: "manifesto",
      label: "2.5 - Vemos o mundo de uma Transperspectiva",
    },
    { id: "section-3", parent: "manifesto", label: "3 - Nossos objetivos" },
    {
      id: "section-3.1",
      parent: "manifesto",
      label: "3.1 - Nossa comunidade tem fome",
    },
    {
      id: "section-3.2",
      parent: "manifesto",
      label: "3.2 - Por uma saúde transgênera",
    },
    {
      id: "section-3.3",
      parent: "manifesto",
      label: "3.3 - Por moradias para nossos corpos",
    },
    {
      id: "section-3.4",
      parent: "manifesto",
      label: "3.4 - Descentralização das tecnologias de generificação",
    },
    {
      id: "section-3.5",
      parent: "manifesto",
      label: "3.5 - Internet livre como meio de produção da consciência",
    },
    {
      id: "section-3.6",
      parent: "manifesto",
      label: "3.6 - Despatologização da vida",
    },
    {
      id: "section-3.7",
      parent: "manifesto",
      label: "3.7 - Pelo direito à reprodução queer",
    },
  ],
  saudeTrans: [
    { id: "servicos-publicos", parent: "saude-trans", label: "serviços públicos" },
    { id: "casas-acolhimento", parent: "saude-trans", label: "casas de acolhimento" },
    { id: "cartilhas-manuais", parent: "saude-trans", label: "cartilhas e manuais" },
    { id: "saude-mental", parent: "saude-trans", label: "saúde mental" },
  ],
  useECompartilhe: [
    { id: "recursos", parent: "use-e-compartilhe", label: "recursos" },
    { id: "banco-de-imagens", parent: "use-e-compartilhe", label: "banco de imagens" },
  ],
};

export default function CyberSidebar() {
  const { theme } = useTheme();
  const { cyberSections, loadSections } = useCyberSection();
  const router = useRouter();
  const { playButtonSelect } = useAudio();

  const [open, setOpen] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<ExpandedNodes>({
    "manifesto-root": false,
    "saude-trans-root": false,
    "use-e-compartilhe-root": false,
  });
  const [manifestoSections, setManifestoSections] = useState<CyberSection[]>(
    []
  );
  const [saudeTransSections, setSaudeTransSections] = useState<CyberSection[]>(
    []
  );
  const [useECompartilheSections, setUseECompartilheSections] = useState<CyberSection[]>(
    []
  );

  useEffect(() => {
    if (cyberSections.length === 0) {
      loadSections([...HARDCODED_SECTIONS.manifesto, ...HARDCODED_SECTIONS.saudeTrans, ...HARDCODED_SECTIONS.useECompartilhe]);
      setManifestoSections(HARDCODED_SECTIONS.manifesto);
      setSaudeTransSections(HARDCODED_SECTIONS.saudeTrans);
      setUseECompartilheSections(HARDCODED_SECTIONS.useECompartilhe);
    } else {
      const manifestos = cyberSections.filter((s) => s.parent === "manifesto");
      const saudeTranss = cyberSections.filter((s) => s.parent === "saude-trans");
      const useECompartilhes = cyberSections.filter((s) => s.parent === "use-e-compartilhe");
      setManifestoSections(manifestos);
      setSaudeTransSections(saudeTranss);
      setUseECompartilheSections(useECompartilhes);
    }
  }, [cyberSections, loadSections]);

  const handleSectionClick = (id: string) => {
    router.push(`/manifesto#${id}`);
    setOpen(false);
  };

  const handleSaudeTransSectionClick = (id: string) => {
    router.push(`/saude-trans/${id}`);
    setOpen(false);
  };

  const handleUseECompartilheSectionClick = (id: string) => {
    router.push(`/use-e-compartilhe/${id}`);
    setOpen(false);
  }

  const toggleNode = (id: keyof ExpandedNodes) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderMainMenu = () => (
    <motion.div
      className="flex-1 flex flex-col gap-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="/" passHref>
          <CyberMiniButton className="flex items-center w-full hover:bg-accent1 hover:text-background">
            <HomeIcon />
            <span>home</span>
          </CyberMiniButton>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-1">
        <div
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-accent1 hover:text-background"
          onClick={() => toggleNode("manifesto-root")}
        >
          <FolderIcon isOpen={expandedNodes["manifesto-root"]} />
          <span>manifesto</span>
        </div>

        <AnimatePresence>
          {expandedNodes["manifesto-root"] && (
            <motion.div
              className="ml-6 pl-2 border-l border-accent1 overflow-hidden"
              variants={subContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {manifestoSections.map((section) => (
                <motion.div
                  key={section.id}
                  className="hover:bg-accent1 hover:text-background cursor-pointer px-2 py-1"
                  onClick={() => handleSectionClick(section.id)}
                  variants={subItemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-1">---</span>
                    <span className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                      {section.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/blog" passHref >
          <CyberMiniButton className="flex items-center w-full hover:bg-accent1 hover:text-background">
            <BlogIcon />
            <span>blog</span>
          </CyberMiniButton>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/arquivos" passHref >
          <CyberMiniButton className="flex items-center w-full hover:bg-accent1 hover:text-background">
            <ArchiveIcon />
            <span>arquivos</span>
          </CyberMiniButton>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-1">
        <div
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-accent1 hover:text-background"
          onClick={() => toggleNode("saude-trans-root")}
        >
          <FolderIcon isOpen={expandedNodes["saude-trans-root"]} />
          <span>saúde trans</span>
        </div>

        <AnimatePresence>
          {expandedNodes["saude-trans-root"] && (
            <motion.div
              className="ml-6 pl-2 border-l border-accent1 overflow-hidden"
              variants={subContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="hover:bg-accent1 hover:text-background cursor-pointer px-2 py-1"
                onClick={() => router.push("/saude-trans")}
                variants={subItemVariants}
              >
                <div className="flex items-center">
                  <span className="mr-1">---</span>
                  <span className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                    geral
                  </span>
                </div>
              </motion.div>
              {saudeTransSections.map((section) => (
                <motion.div
                  key={section.id}
                  className="hover:bg-accent1 hover:text-background cursor-pointer px-2 py-1"
                  onClick={() => handleSaudeTransSectionClick(section.id)}
                  variants={subItemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-1">---</span>
                    <span className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                      {section.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-1">
        <div
          className="flex items-center px-2 py-1 cursor-pointer hover:bg-accent1 hover:text-background"
          onClick={() => toggleNode("use-e-compartilhe-root")}
        >
          <FolderIcon isOpen={expandedNodes["use-e-compartilhe-root"]} />
          <span>use e compartilhe</span>
        </div>

        <AnimatePresence>
          {expandedNodes["use-e-compartilhe-root"] && (
            <motion.div
              className="ml-6 pl-2 border-l border-accent1 overflow-hidden"
              variants={subContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="hover:bg-accent1 hover:text-background cursor-pointer px-2 py-1"
                onClick={() => router.push("/use-e-compartilhe")}
                variants={subItemVariants}
              >
                <div className="flex items-center">
                  <span className="mr-1">---</span>
                  <span className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                    geral
                  </span>
                </div>
              </motion.div>
              {useECompartilheSections.map((section) => (
                <motion.div
                  key={section.id}
                  className="hover:bg-accent1 hover:text-background cursor-pointer px-2 py-1"
                  onClick={() => handleUseECompartilheSectionClick(section.id)}
                  variants={subItemVariants}
                >
                  <div className="flex items-center">
                    <span className="mr-1">---</span>
                    <span className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                      {section.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/coletivos" passHref >
          <CyberMiniButton className="flex items-center w-full hover:bg-accent1 hover:text-background">
            <TransgenderIcon />
            <span>coletivos parceires</span>
          </CyberMiniButton>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/sobre" passHref >
          <CyberMiniButton className="flex items-center w-full hover:bg-accent1 hover:text-background">
            <AboutIcon />
            <span>sobre nós</span>
          </CyberMiniButton>
        </Link>
      </motion.div>
    </motion.div>
  );

  return (
    <CyberContainer>
      <motion.div
        className="fixed top-4 left-4 z-40 xl:hidden"
        whileHover={{ scale: 1.1 }}
        onHoverStart={playButtonSelect}
      >
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="p-3 text-accent1 hover:text-accent5-hover"
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 1.2 }} // Scale up by default
        >
          <HamburgerIcon />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className={classnames(
              theme,
              "fixed top-0 left-0 h-full z-50 overflow-y-auto w-3/4 sm:w-72",
              "bg-background text-accent1 border-r border-accent1 shadow-lg"
            )}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <CyberContainer className="h-full">
              <div className="p-2 h-full flex flex-col">
                <motion.div
                  className="flex justify-end p-2 mb-2"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={playButtonSelect}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="text-accent1 hover:text-accent5-hover p-1"
                  >
                    <CloseIcon />
                  </button>
                </motion.div>

                <div className="px-3 py-2 mb-4 border-b border-accent1">
                  <span className="font-bold text-accent1">
                    --- NAVEGAÇÂO ---
                  </span>
                </div>

                {renderMainMenu()}

                <div className="mt-auto pt-4 border-t border-accent1 text-xs text-accent3 flex justify-between px-2">
                  <span>--- v1.2.0 ---</span>
                  <span>--- UTF-8 ---</span>
                </div>
              </div>
            </CyberContainer>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={classnames(
          theme,
          "hidden lg:block fixed top-0 left-0 h-full z-40 overflow-y-auto w-72",
          "bg-background text-accent1 border-r border-accent1 shadow-lg"
        )}
      >
        <CyberContainer className="h-full">
          <div className="p-2 h-full flex flex-col">
            <div className="px-3 py-2 mb-4 border-b border-accent1">
              <span className="font-bold text-accent1">--- NAVEGAÇÂO ---</span>
            </div>

            {renderMainMenu()}

            <div className="mt-auto pt-4 border-t border-accent1 text-xs text-accent3 flex justify-between px-2">
              <span>--- v1.2.0 ---</span>
              <span>--- UTF-8 ---</span>
            </div>
          </div>
        </CyberContainer>
      </div>
    </CyberContainer>
  );
}
