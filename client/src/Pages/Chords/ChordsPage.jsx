import { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { GetSingleChordsQuery } from "./ChordsAPI";
import { useMatchRoute } from "react-location";
import { IoArrowRedoCircle, IoArrowUndoCircleSharp } from "react-icons/io5";

const ChordsPage = () => {
  const matchRoute = useMatchRoute();
  let { fileName } = matchRoute({ to: "/chords/:fileName" });
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const songChords = GetSingleChordsQuery(fileName);

  return (
    <StyledChordPage>
      <Document
        file={songChords.isSuccess ? songChords.data.file : null}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="buttonsContainer">
        <IoArrowUndoCircleSharp
          size={30}
          color={pageNumber === 1 ? `grey` : `indigo`}
          onClick={() =>
            pageNumber === 1 ? null : setPageNumber(pageNumber - 1)
          }
        />
        <IoArrowRedoCircle
          size={30}
          color={pageNumber === numPages ? `grey` : `indigo`}
          onClick={() =>
            pageNumber === numPages ? null : setPageNumber(pageNumber + 1)
          }
        />
      </div>
      <p className="totalPagesLabel">
        Page {pageNumber} of {numPages}
      </p>
    </StyledChordPage>
  );
};
export default ChordsPage;

const StyledChordPage = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .buttonsContainer {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 1% 1% 0 1%;

    button {
      padding: 0.3%;
      margin: 0.3%;
    }
  }

  .totalPagesLabel {
    font-size: 12px;
    font-weight: 500;
    margin: 1%;
  }
`;
