import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from './Hero';

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

const Introduction = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContainer style={{ visibility: isReady ? 'visible' : 'hidden' }}>        
      <Hero />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 400px;
  padding: 0;
  display: flex;
  flex-direction: left;
  justify-content: center;
  align-items: left;
  animation: ${fadeIn} 0.8s ease-out forwards;
  will-change: transform, opacity;
  // border:: 3px solid #000;
`;

export default Introduction;
