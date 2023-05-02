import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useMemo, useState } from "react";
import CardSection from "./components/CardSection";
import OMPANGI_DATA from "./data/OMPANGI_DATA";

const EASY = "EASY";
const NORMAL = "NORMAL";
const HARD = "HARD";

function App() {
  const [level, setLevel] = useState(EASY);
  const [score, setScore] = useState(0);

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

  //
  // 배열 셔플 함수
  const shuffle = (array) => {
    let newArray = array.sort(() => Math.random() - 0.5);
    return newArray;
  };

  const renderData = useMemo(() => {
    // 렌더링 할 랜덤 배열 만들기
    shuffle(OMPANGI_DATA);
    const slicedData = OMPANGI_DATA.slice(
      0,
      level === "EASY" ? 5 : level === "NORMAL" ? 7 : 9
    );
    console.log(slicedData);
    return shuffle([...slicedData, ...slicedData]);
  }, [level]);
  console.log(renderData);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header level={level} score={score} />
        <St.Main>
          <St.LevelContainer>{levelButtonList}</St.LevelContainer>
          <CardSection
            setScore={setScore}
            level={level}
            renderData={renderData}
          />
        </St.Main>
      </ThemeProvider>
    </>
  );
}

export default App;

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
};
