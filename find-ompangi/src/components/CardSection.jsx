import styled from "styled-components";
import { useEffect, useState } from "react";

const CardSection = ({ level, setScore, renderData, score }) => {
  const [testCardList, setTestCardList] = useState([]); // 최근에 선택된 두 카드 검사용 리스트
  const [openCardList, setOpenCardList] = useState([]); // 열려있는 카드 리스트
  const [isClickAbled, setIsClickAbled] = useState(true); // 카드 클릭 가능 여부

  // level이 바뀌면 초기화
  useEffect(() => {
    setTestCardList([]);
    setOpenCardList([]);
  }, [level]);

  // 카드 클릭 핸들링 함수
  const handleCardClick = (e) => {
    const { id, className } = e.currentTarget;
    let classNameArray = className.split(" ");
    setTestCardList([...testCardList, classNameArray.at(-1)]); // 테스트 배열에 cardId 추가
    setOpenCardList([...openCardList, Number(id)]); // 카드 오픈 배열에 카드 인덱스 추가
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
      // 카드 오픈 리스트에서 최근에 넣었던 두 개 카드 삭제
      const newList = openCardList.slice(0, -2);
      setTimeout(() => {
        setOpenCardList(newList);
        setIsClickAbled(true);
      }, 1500);
    }
    // 테스트 배열 초기화
    setTestCardList([]);
  }

  // 카드 렌더링
  const cardList = renderData.map((item, idx) => {
    const { id: cardId, imgSrc, alt } = item;
    // openCardList에 인덱스 있는지 검사해서 조건분기 렌더링
    return openCardList.includes(idx) ? (
      <St.CardFront key={`${cardId}_${idx}`} className={cardId}>
        <img src={imgSrc} alt={alt} />
      </St.CardFront>
    ) : (
      <St.CardBack
        key={`${cardId}_${idx}`}
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
    justify-content: space-between;
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
