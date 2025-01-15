import React from 'react';
import HeroAnimation from "../components/HeroAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface Content {
  name: string;
  tags: string;
  description: string;
  animationText1: string;
  animationText2: string;
}

interface ContentType {
  en: Content;
  zh: Content;
}

const AnimatedDiv = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  will-change: transform, opacity;
`;

export default function Hero(): React.ReactElement {
  const { language } = useLanguage();

  const content: ContentType = {
    en: {
      name: "I'm Yang",
      tags: "#Zephyr #Zhihao #",
      description: "I'm an undergraduate student at University of Minnesota Twin Cities majoring in Computer Science. Passionate about developing applications that merge purpose with aesthetics.",
      animationText1: "<Developer />",
      animationText2: "<Student />"
    },
    zh: {
      name: "我是杨",
      tags: "#Zephyr #志浩 #",
      description: "我是明尼苏达大学双城分校的本科生，主修计算机科学。热衷于开发将实用性与美感相结合的应用程序。",
      animationText1: "<开发者 />",
      animationText2: "<学生 />"
    }
  };

  return (
    <div>
      <AnimatedDiv delay={0.2} className="mb-6 font-semibold">
        <span className="text-[#313d44] sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          {content[language].name}
        </span>
      </AnimatedDiv>
      <AnimatedDiv delay={0.4} className="h-10 mb-8 sm:mb-10">
        <HeroAnimation text1={content[language].animationText1} text2={content[language].animationText2} />
      </AnimatedDiv>
      <AnimatedDiv delay={0.6} className="mb-8 text-xl text-[#313d44] sm:mb-10 sm:text-[26px] bg-gradient-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        {content[language].tags}
      </AnimatedDiv>
      <AnimatedDiv delay={0.8} className="mb-4 text-sm text-[#313d44] sm:mb-6 sm:text-base bg-gradient-to-b to-muted-foreground from-foreground bg-clip-text">
        {content[language].description}
      </AnimatedDiv>
    </div>
  );
} 