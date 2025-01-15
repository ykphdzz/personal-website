"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { usePathname } from "next/navigation";
import ScrollText from '../components/ScrollText';
import { BentoGridThirdDemo } from '../components/BentoGridThirdDemo';
import { HeroScrollDemo } from '../components/HeroScrollDemo';
import "./globals.css";
import { CoverDemo } from '../components/CoverDemo';
import StillsStack  from '../components/StillsStack';
import { CardHoverEffectDemo } from '../components/card-hover-effect';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ExpandableCardDemo } from '../components/ExpandableCardDemo';
import { SectionTitle } from '../components/SectionTitle';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedSection = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  will-change: transform, opacity;
`;

export default function Home() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <ScrollText />
        {/* <HeroScrollDemo /> */}
        {/* <CoverDemo /> */}
        {/* <BentoGridThirdDemo /> */}
        {/* <StillsStack /> */}
        <div style={{ visibility: isReady ? 'visible' : 'hidden' }}>
          <AnimatedSection delay={1.5}>
            <div id="skills">
              <CardHoverEffectDemo />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={1.8}>
            <div id="projects">
              <SectionTitle translationKey="expandableCard.title" />
              <ExpandableCardDemo />
            </div>
          </AnimatedSection>
        </div>
      </main>
    </LanguageProvider>
  );
}


