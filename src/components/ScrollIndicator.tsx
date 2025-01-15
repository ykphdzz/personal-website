import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const IndicatorWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #313d44;
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${bounce} 2s ease-in-out infinite;
  cursor: pointer;
  z-index: 10;
`;

const ScrollIndicator = () => {
  return (
    <IndicatorWrapper>
      My Skills
    </IndicatorWrapper>
  );
};

export default ScrollIndicator;
