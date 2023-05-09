import styled from "styled-components";
import { useEffect, useState } from "react";

const testCardList = [];

const CardSection = ({ level, setScore, renderData, score, reset }) => {
  const [openCardList, setOpenCardList] = useState([]); // 열려있는 카드 리스트
  const [isClickAbled, setIsClickAbled] = useState(true); // 카드 클릭 가능 여부
  const [isRotate, setIsRotate] = useState("");

  // level이 바뀌면, reset 버튼 눌리면 모두 초기화
  useEffect(() => {
    testCardList.length = 0;
    setOpenCardList([]);
    setScore(0);
  }, [level, reset]);

  // 카드 클릭 핸들링 함수
  const handleCardClick = (e) => {
    const { id, classList } = e.currentTarget;
    classList.add("rotate"); // 회전 애니메이션

    testCardList.push(classList[2]); // 테스트 배열에 cardId 추가
    console.log(testCardList);
    console.log(testCardList.length);
    setTimeout(() => {
      setOpenCardList([...openCardList, Number(id)]); // 카드 오픈 배열에 카드 인덱스 추가
      classList.remove("rotate");
    }, 150);
  };

  // 테스트 배열 길이가 2일때 같은 카드인지 검사
  if (testCardList.length === 2) {
    // 카드 클릭 막기
    setIsClickAbled(false);
    // 성공
    if (testCardList[0] === testCardList[1]) {
      setScore(score + 1);
      setIsClickAbled(true);
    }
    // 실패
    else {
      setTimeout(() => {
        setIsRotate("rotate");
        setTimeout(() => {
          // 카드 오픈 리스트에서 최근에 넣었던 두 개 카드 삭제
          const newList = openCardList.slice(0, -2);
          setOpenCardList(newList);
          setIsClickAbled(true);
          setIsRotate("");
        }, 100);
      }, 1200);
    }
    // 테스트 배열 초기화
    testCardList.length = 0;
  }

  // 카드 렌더링
  const cardList = renderData.map((item, idx) => {
    const { id: cardId, imgSrc, alt } = item;
    // openCardList에 인덱스 있는지 검사해서 조건분기 렌더링
    return openCardList.includes(idx) ? (
      <St.CardFront
        key={`${cardId}_${idx}_front`}
        className={
          openCardList.indexOf(idx) >= openCardList.length - 2 && `${isRotate}`
        }
      >
        <img src={imgSrc} alt={alt} />
      </St.CardFront>
    ) : (
      <St.CardBack
        key={`${cardId}_${idx}_back`}
        id={idx}
        className={cardId}
        onClick={isClickAbled ? handleCardClick : null}
      >
        🌼
      </St.CardBack>
    );
  });

  return <St.CardContainer>{cardList}</St.CardContainer>;
};

export default CardSection;

const St = {
  CardContainer: styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    column-gap: 1rem;
    row-gap: 2rem;

    width: 73%;
    margin-top: 1rem;
  `,

  CardFront: styled.article`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 19rem;
    height: 25rem;

    border-radius: 1rem;

    background-color: white;

    cursor: pointer;

    &.rotate {
      transition: all 0.2s linear;
      backface-visibility: hidden;
      transform: rotateY(180deg);
    }

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

    border-radius: 1rem;

    font-size: 2.7rem;

    background-color: ${({ theme }) => theme.colors.darkPink};

    cursor: pointer;

    &.rotate {
      transition: all 0.2s linear;
      backface-visibility: hidden;
      transform: rotateY(180deg);
    }
  `,
};
