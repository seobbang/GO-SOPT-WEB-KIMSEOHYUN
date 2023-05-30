import styled from "styled-components";

const SuccessModal = ({ setIsModalOpen }) => {
  const handleOnClick = () => {
    setIsModalOpen(false);
  };
  return (
    <St.Background>
      <St.Content>
        🎉🥳축하합니다🥳🎉
        <St.BackToGameButton onClick={handleOnClick}>
          게임으로 돌아가기
        </St.BackToGameButton>
      </St.Content>
    </St.Background>
  );
};

export default SuccessModal;

const St = {
  Background: styled.div`
    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: #00000065;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 60rem;
    height: 20rem;

    border: 0.3rem solid black;
    border-radius: 1rem;

    align-items: center;
    background-color: white;

    font-size: 4rem;
  `,
  BackToGameButton: styled.button`
    width: 16rem;
    height: 4rem;

    margin-top: 2.7rem;
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.colors.lightPink};

    font-size: 1.5rem;
    font-weight: bold;

    cursor: pointer;
  `,
};
