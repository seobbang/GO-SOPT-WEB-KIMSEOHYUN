import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = ({ cardInfo, level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { id, imgSrc, alt } = cardInfo;

  // 난이도 바뀌면, 카드 모두 다시 뒷면으로 뒤집기
  useEffect(() => {
    setIsOpen(false);
  }, [level]);

  return (
    <>
      {isOpen ? (
        <St.CardFront className={id}>
          <img src={imgSrc} alt={alt} />
        </St.CardFront>
      ) : (
        <St.CardBack onClick={() => setIsOpen(true)}>🌼</St.CardBack>
      )}
    </>
  );
};

export default Card;

const St = {
  CardFront: styled.article`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 19rem;
    height: 25rem;

    border-radius: 1rem;

    background-color: white;

    cursor: pointer;

    & > img {
      width: 15rem;
    }
  `,

  CardBack: styled.article`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 19rem;
    height: 25rem;

    font-size: 2.7rem;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.darkPink};

    cursor: pointer;
  `,
};
