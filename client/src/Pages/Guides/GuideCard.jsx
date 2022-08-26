import styled, { keyframes } from "styled-components";
import { GetGuideThumbnail } from "./GuidesAPI";

const GuideCard = (props) => {
  const thumbnail = GetGuideThumbnail(props.thumbnail);

  return (
    <GuitarCardWrapper>
      <StyledThumbnail>
        <a href={props.link}>
          {
            <img
              src={
                thumbnail.isSuccess
                  ? "data:image/png;base64, " + thumbnail.data.file
                  : ""
              }
              alt="Loading..."
            />
          }
        </a>
      </StyledThumbnail>
      <StyledGuideContent>
        <a href={props.link}>
          <h2 className="guitarCardTitle">{props.title}</h2>
        </a>
        <div className="guitarCardCreator">{props.creator}</div>
        <div className="guitarCardDesc overflowContainer">{props.desc}</div>
      </StyledGuideContent>
    </GuitarCardWrapper>
  );
};

export default GuideCard;

const cardAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GuitarCardWrapper = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-left: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  transition: border-color 0.6s linear;
  padding: 3px;

  .overflowContainer {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  &:hover {
    border-color: BlueViolet;
    border-width: 1px;
    border-style: solid;
  }

  animation-duration: 0.5s;
  animation-name: ${cardAnimation};
  animation-delay: 0s;
  animation-fill-mode: backwards;
`;

const StyledThumbnail = styled.div`
  height: 100%;
  width: 20%;
  margin-bottom: 1%;
  margin-right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    aspect-ratio: 16/9;
    max-height: 100%;
    max-width: 100%;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
  }
`;

const StyledGuideContent = styled.div`
  font-size: 12px;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;

  .guitarCardDesc {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;

      &:hover {
        cursor: pointer;
      }
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.App.backgroundColor.secondary};
      border-radius: 10px;
    }
  }
`;
