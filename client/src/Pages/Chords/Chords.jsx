import styled from "styled-components";
import { pdfjs } from "react-pdf";
import { GetAllChordsQuery } from "./ChordsAPI";
import ChordCard from "./ChordCard.jsx";
import { Link } from "react-location";
import Pagination from "../Guides/GuidesPagination";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Chords = () => {
  const [page, setPage] = useState(1);

  const chords = GetAllChordsQuery(page);

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
          chords.data.chordsData.map((chord) => {
            return (
              <Link key={`link-${chord.file}`} to={`${chord.file}`}>
                <ChordCard key={`chords-${chord.file}`} chord={chord} />
              </Link>
            );
          })}
      </ChordsWrapper>

      <PaginationWrapper>
        <Pagination
          page={page}
          setPage={setPage}
          maxPage={chords.isSuccess ? chords.data.maxPage : 1}
        />
      </PaginationWrapper>
    </StyledChords>
  );
};
export default Chords;

const HeaderWrapper = styled.div`
  height: 15vh;
  width: 90vw;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 3vw;

  h1 {
    font-size: 5vh;
  }

  p {
    font-size: 2vh;
  }
`;

const ChordsWrapper = styled.div`
  height: 72vh;
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: start;
  a {
    height: 13vh;
    width: 20vw;
    margin-right: 1vw;
    margin-bottom: 1vh;
  }
`;

const StyledChords = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90vw;
`;

const PaginationWrapper = styled.div`
  height: 10vh;
  width: 90vw;
`;
