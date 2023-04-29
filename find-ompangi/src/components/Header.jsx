import styled from "styled-components";

const EASY = "EASY";
const NORMAL = "NORMAL";
const HARD = "HARD";

const Header = (props) => {
  const { level } = props;
  const cardCount = level === EASY ? 5 : level === NORMAL ? 7 : 9;

  return (
    <St.HeaderContainer>
      <h1>🔮 옴팡이를 맞춰주세요 🔮</h1>
      <St.Score>0 / {cardCount}</St.Score>
      <St.ResetButton type="button">RESET</St.ResetButton>
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

    height: 15rem;

    font-size: 3.5em;
    font-weight: bold;

    background-color: ${({ theme }) => theme.colors.lightPink};
  `,
  Score: styled.h2`
    margin-top: 2rem;
  `,
  ResetButton: styled.button`
    position: absolute;
    right: 4rem;

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
