import styled from "styled-components";
import { pdfjs } from "react-pdf";
import { GetAllChordsQuery } from "./ChordsAPI";
import ChordCard from "./ChordCard.jsx";
import { Link } from "react-location";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Chords = () => {
  const chords = GetAllChordsQuery();

  return (
    <StyledChords>
      <HeaderWrapper>
        <h1>Chords Page</h1>
        <div>
          <p>Here you can find chords for some of the best songs ever!</p>
        </div>
      </HeaderWrapper>

      <ChordsWrapper>
        {chords.isSuccess &&
          chords.data.map((chord) => {
            return (
              <Link key={`link-${chord.file}`} to={`${chord.file}`}>
                <ChordCard key={`chords-${chord.file}`} chord={chord} />
              </Link>
            );
          })}
      </ChordsWrapper>
    </StyledChords>
  );
};
export default Chords;

const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 3%;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 15px;
  }
`;

const ChordsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  Link {
    margin: 3%;
  }
`;

const StyledChords = styled.div`
  display: flex;
  flex-direction: column;
`;
