import styled from "styled-components";

const Cards = () => {
  return (
    <St.CardContainer>
      <St.CardFront />
      <St.CardFront />
      <St.CardFront />
      <St.CardFront />
      <St.CardFront />
      <St.CardBack>🌼</St.CardBack>
      <St.CardFront />
      <St.CardFront />
      <St.CardFront />
      <St.CardFront />
    </St.CardContainer>
  );
};

export default Cards;

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
    width: 19rem;
    height: 25rem;

    border-radius: 1rem;

    background-color: white;

    cursor: pointer;
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
