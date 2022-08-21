import styled from "styled-components";

const ChordCard = (props) => {
  const { chord } = props;

  return (
    <StyledChordCard>
      <p className="cardTitle">{chord.title}</p>
      <p className="cardAuthor">{chord.author}</p>
    </StyledChordCard>
  );
};

const StyledChordCard = styled.div`
  min-height: 120px;
  max-height: 120px;
  min-width: 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: 0.6s;
  border-radius: 5px; /* 5px rounded corners */
  color: black;
  background-color: white;
  font-family: Verdana, sans-serif;
  margin: 1rem;
  padding: 1% 3%;
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
    font-size: 22px;
  }

  .cardAuthor {
    font-weight: 200;
    font-size: 12px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default ChordCard;
