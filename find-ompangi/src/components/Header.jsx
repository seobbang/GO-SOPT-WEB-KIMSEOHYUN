import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = ({ level, score }) => {
  const cardCount = level === "EASY" ? 5 : level === "NORMAL" ? 7 : 9;
  const [isBlink, setIsBlink] = useState(false);

  useEffect(() => {
    if (score === 0) return;
    setIsBlink(true);
    setTimeout(() => {
      setIsBlink(false);
    }, 2500);
  }, [score]);

  return (
    <St.HeaderContainer>
      <h1>🔮 옴팡이를 맞춰주세요 🔮</h1>
      <St.Score className={isBlink && "blink"}>
        {score} / {cardCount}
      </St.Score>
    </St.HeaderContainer>
  );
};

export default Header;

const St = {
  HeaderContainer: styled.header`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 15rem;

    font-size: 3.5em;
    font-weight: bold;

    background-color: ${({ theme }) => theme.colors.lightPink};
  `,
  Score: styled.h2`
    margin-top: 2rem;

    @keyframes blink-effect {
      50% {
        opacity: 0;
      }
    }

    &.blink {
      animation: blink-effect 0.8s step-end infinite;
      font-weight: bold;
    }
  `,
};
