import styled from "styled-components";
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import { useMemo, useState } from "react";
import OMPANGI_DATA from "../data/OMPANGI_DATA";
import ModalPortal from "../components/modal/ModalPortal";
import SuccessModal from "../components/modal/SuccessModal";

const EASY = "EASY";
const NORMAL = "NORMAL";
const HARD = "HARD";

const FindOmpangi = () => {
  const [level, setLevel] = useState(EASY);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 난이도 버튼 렌더링
  const levelButtonList = [EASY, NORMAL, HARD].map((item) => (
    <St.LevelButton
      key={item}
      className={level === item && "selected"}
      onClick={() => setLevel(item)}
    >
      {item}
    </St.LevelButton>
  ));

  // 배열 셔플 함수
  const shuffling = () => {
    const shuffle = (array) => {
      let newArray = array.sort(() => Math.random() - 0.5);
      return newArray;
    };

    shuffle(OMPANGI_DATA);
    const slicedData = OMPANGI_DATA.slice(
      0,
      level === EASY ? 5 : level === NORMAL ? 7 : 9
    );
    return shuffle([...slicedData, ...slicedData]);
  };

  // 렌더링 할 랜덤 배열 만들기
  let renderData = useMemo(() => {
    return shuffling();
  }, [level, reset]);
  console.log(renderData);

  return (
    <St.Main>
      <Header level={level} score={score} setIsModalOpen={setIsModalOpen} />
      <St.LevelContainer>{levelButtonList}</St.LevelContainer>
      <CardSection
        score={score}
        setScore={setScore}
        level={level}
        renderData={renderData}
        reset={reset}
      />
      <St.ResetButton type="button" onClick={() => setReset(!reset)}>
        RESET
      </St.ResetButton>
      {isModalOpen && (
        <ModalPortal>
          <SuccessModal setIsModalOpen={setIsModalOpen} />
        </ModalPortal>
      )}
    </St.Main>
  );
};

export default FindOmpangi;

const St = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.beige};
  `,

  /* 난이도 버튼 영역 */
  LevelContainer: styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    height: 8rem;
  `,

  LevelButton: styled.button`
    width: 15rem;
    height: 5rem;

    border-radius: 0.5rem;
    border: none;

    font-size: 1.8rem;
    font-weight: bold;

    color: white;
    background-color: ${({ theme }) => theme.colors.brown};

    cursor: pointer;

    &.selected {
      border: 0.3rem solid black;
    }
  `,
  ResetButton: styled.button`
    position: absolute;
    top: 5rem;
    right: 7rem;

    width: 10rem;
    height: 5rem;

    font-weight: bold;

    border-radius: 0.5rem;
    border: none;

    cursor: pointer;

    &:hover {
      border: 0.3rem solid black;
    }
  `,
};
