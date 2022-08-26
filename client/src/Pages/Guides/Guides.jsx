import { useState } from "react";
import styled from "styled-components";
import * as blueTbn from "./Bluesquare.png";
import GuideCard from "./GuideCard";
import { GetGuidesQuery } from "./GuidesAPI";
import GuidesPagination from "./GuidesPagination";

const Guides = () => {
  const [page, setPage] = useState(1);
  const guides = GetGuidesQuery(page);

  return (
    <StyledGuidesWrapper>
      <GuidesHeaderWrapper>
        <h1 className="pageHeader">Guides</h1>
        <div className="headerContent">
          Learn to play, sing, create and write. Here you can find a variety of
          music related content, which might be the start of your own musical
          journey.
        </div>
      </GuidesHeaderWrapper>

      <GuidesListWrapper>
        {guides.isSuccess &&
          guides.data.guidesData.map((guide) => {
            return <GuideCard {...guide} key={guide.id} />;
          })}
      </GuidesListWrapper>

      <GuidesPaginationWrapper>
        <GuidesPagination
          page={page}
          setPage={setPage}
          maxPage={guides.isSuccess ? guides.data.maxPage : 1}
        />
      </GuidesPaginationWrapper>
    </StyledGuidesWrapper>
  );
};
export default Guides;

const StyledGuidesWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GuidesHeaderWrapper = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pageHeader {
    font-size: 40px;
  }

  .headerContent {
    font-size: 18px;
    width: 100%;
    font-weight: 100;
    letter-spacing: 3px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const GuidesListWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const GuidesPaginationWrapper = styled.div`
  width: 100%;
  height: 10vh;
`;
