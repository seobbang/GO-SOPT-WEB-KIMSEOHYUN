import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Cards from "./components/Cards";

const EASY = "EASY";
const NORMAL = "NORMAL";
const HARD = "HARD";

function App() {
  const levelButtonList = [EASY, NORMAL, HARD].map((item) => (
    <St.LevelButton key={item}>{item}</St.LevelButton>
  ));

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <St.Main>
          <St.LevelContainer>{levelButtonList}</St.LevelContainer>
          <Cards />
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
  LevelContainer: styled.div`
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

    &:hover {
      border: 0.3rem solid black;
    }
  `,
};
