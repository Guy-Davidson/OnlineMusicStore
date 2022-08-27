import styled, { keyframes } from "styled-components";

const ChordCard = (props) => {
  const { chord } = props;

  return (
    <StyledChordCard className="animate pop">
      <p className="cardTitle">{chord.title}</p>
      <p className="cardAuthor">{chord.author}</p>
    </StyledChordCard>
  );
};

const AnimatedChordCard = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledChordCard = styled.div`
  height: 13vh;
  width: 20vw;
  margin-right: 1vw;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: 0.6s;
  border-radius: 5px;
  color: black;
  background-color: white;
  font-family: Verdana, sans-serif;
  border-color: black;
  border-width: 1px;
  border-style: solid;

  &:hover {
    background-color: indigo;
    color: white;
    border-color: white;
    border-width: 1px;
    border-style: solid;
  }

  .cardTitle {
    font-weight: 600;
    font-size: 1vw;
  }

  .cardAuthor {
    font-weight: 200;
    font-size: 1vw;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  animation-duration: 0.5s;
  animation-name: ${AnimatedChordCard};
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
`;

export default ChordCard;
