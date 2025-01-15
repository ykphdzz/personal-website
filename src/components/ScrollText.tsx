'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled, { createGlobalStyle } from 'styled-components';
import Introduction from './Introduction';
import { CaretDownFilled } from '@ant-design/icons';
import { TextHoverEffectDemo } from './TextHoverEffectDemo';
import { FloatingDockDemo } from './FloatingDockDemo';
import { useLanguage } from '../contexts/LanguageContext';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Bandeins Sans & Strange Variable";
    src: url("https://res.cloudinary.com/dldmpwpcp/raw/upload/v1566406079/BandeinsStrangeVariable_esetvq.ttf");
  }
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    background-color: #fffefb;
    font-family: "Nunito", sans-serif;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }

  body {
    width: 100%;
    background-color: #fffefb;
  }
`;

interface ScrollTextProps {}

const ScrollText: React.FC<ScrollTextProps> = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<HTMLHeadingElement[]>([]);
  const [isReady, setIsReady] = useState(false);
  const { language, t } = useLanguage();

  const setHeadingRef = useCallback((el: HTMLHeadingElement | null, index: number) => {
    if (el) {
      headingsRef.current[index] = el;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      const duration = 1;

      const scene = sceneRef.current;
      const headings = headingsRef.current.filter(Boolean);

      if (!scene || headings.length === 0) return;

      gsap.set(scene, { autoAlpha: 0 });
      gsap.set(headings, { y: -150 });

      const ctx = gsap.context(() => {
        gsap.to(scene, {
          autoAlpha: 1,
          duration: 0.3,
          onComplete: () => setIsReady(true)
        });

        ScrollTrigger.create({
          trigger: scene,
          start: 'top top',
          end: 'max',
          pin: true
        });

        gsap.to(headings, {
          scrollTrigger: {
            trigger: scene,
            start: 'top 90%',
            end: 'max',
            scrub: 1
          },
          y: 150,
          ease: 'none',
          duration: duration,
          stagger: duration * 0.5
        });
      }, scene);

      return () => {
        ctx.revert();
        clearTimeout(timer);
      };
    }, 100);
  }, []);

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <ContentWrapper>
          <Scene ref={sceneRef} style={{ visibility: isReady ? 'visible' : 'hidden' }}>
            {Array.from({ length: 3 }, (_, i) => (
              <Container key={i}>
                <StyledH1 
                  ref={(el) => setHeadingRef(el, i)}
                  className={`heading-${i + 1}`}
                >
                  {t('scrollText.greeting')}
                </StyledH1>
              </Container>
            ))}
          </Scene>
          <Introduction />
        </ContentWrapper>
        <ScrollPrompt style={{ visibility: isReady ? 'visible' : 'hidden' }}>
          {t('scrollText.skills')} <br/> <CaretDownFilled />
        </ScrollPrompt>
      </Wrapper>
    </>
  );
};

const DockWrapper = styled.div`
  width: 100%;
  height: 90px;
  // border: 3px solid yellow;
  margin-top: -180px;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;  // 增加边距
  box-sizing: border-box;
  // border: 3px solid blue;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: left;  // 改为两端对齐
  // border: 2px solid red;
  width: 1230px;
  padding: 0 20px;  // 添加内边距
`;

const Scene = styled.div`
  transform-style: preserve-3d;
  opacity: 0;
  width: 440px;  // 增加宽度
  min-height: 500px;

  visibility: hidden;
  // border: 5px solid pink;
`;

const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 0;
  margin: 0;
  perspective: 500px;
  overflow: hidden;
  transform-origin: center center;
  
  &:nth-child(1) { transform: rotateX(-24deg) rotateY(-50deg) rotateX(0deg) translate3d(245px, 0, 0) scaleY(1); }
  &:nth-child(2) { transform: rotateX(-24deg) rotateY(-50deg) rotateX(90deg) translate3d(91px, -1.5px, 0) scaleY(1.7); }
  &:nth-child(3) { transform: rotateX(-24deg) rotateY(-50deg) rotateX(0deg) translate3d(-63px, 0, -3px) scaleY(1); }
  &:nth-child(even) { opacity: 0.8; }
`;

const StyledH1 = styled.h1`
  font-family: "Bandeins Sans & Strange Variable";
  font-size: 150px;
  font-variation-settings: "wdth" 400;
  color: #313d44;
  margin: 0;
  padding: 0;
  line-height: 95px;
`;

const ScrollDownWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #313d44;
  font-weight: 400;
  font-size: 14px;
  overflow: visible;
`;

const Arrow = styled.div`
  position: relative;
  top: 0;
  margin: 0 auto;
  width: 15px;
  height: 15px;
  filter: invert(1);
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
`;

const ScrollPrompt = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: #313d44;
  font-weight: 500;
  opacity: 0;
  animation: bounce 2s infinite, fadeIn 0.5s ease-out forwards;
  animation-delay: 1.2s;
  // border: 3px solid yellow;
  text-align: center;
  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-20px);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export default ScrollText;