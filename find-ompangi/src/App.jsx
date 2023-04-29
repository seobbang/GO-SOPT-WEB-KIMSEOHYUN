import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useState } from "react";
import Card from "./components/Card";
import OMPANGI_DATA from "./data/OMPANGI_DATA";

const EASY = "EASY";
const NORMAL = "NORMAL";
const HARD = "HARD";

function App() {
  const [level, setLevel] = useState(EASY);

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
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  // 렌더링 할 랜덤 배열 만들기
  shuffle(OMPANGI_DATA);
  const slicedData = OMPANGI_DATA.slice(
    0,
    level === EASY ? 5 : level === NORMAL ? 7 : 9
  );
  const renderData = [...slicedData, ...slicedData];
  shuffle(renderData);

  // 카드 렌더링 --> key 값 고민
  const cardList = renderData.map((item, idx) => (
    <Card key={`${item.id}_${idx}`} cardInfo={item} />
  ));

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header level={level} />
        <St.Main>
          <St.LevelContainer>{levelButtonList}</St.LevelContainer>
          <St.CardContainer>{cardList}</St.CardContainer>
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

  /* 카드 */
  CardContainer: styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 2rem;

    width: 73%;
    margin-top: 1rem;
  `,
};
