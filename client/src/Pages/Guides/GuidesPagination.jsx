import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const GuidesPagination = (props) => {
  const { page, setPage, maxPage } = props;

  return (
    <PaginationWrapper>
      <div>
        <AiOutlineLeft
          className="paginationController"
          size={40}
          onClick={page === 1 ? null : () => setPage(page - 1)}
        />
      </div>
      <div className="currPage">{page}</div>
      <div>
        <AiOutlineRight
          className="paginationController"
          size={40}
          onClick={page >= maxPage ? null : () => setPage(page + 1)}
        />
      </div>
    </PaginationWrapper>
  );
};

export default GuidesPagination;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .currPage {
    font-size: 20px;
    font-weight: normal;
  }

  .paginationController {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.6s linear;

    &:hover {
      background-color: ${(props) => props.theme.App.backgroundColor.hover};
    }
  }
`;
