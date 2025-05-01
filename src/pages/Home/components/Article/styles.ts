import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 54rem;

  margin: 0 auto;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
export const ArticleContent = styled.section`
  background: ${(props) => props.theme["blue-600"]};
  border-radius: 8px;

  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      width: 100%;
      max-width: 15.625rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["blue-300"]};
      font-weight: 300;
    }
  }

  p {
    color: ${(props) => props.theme["blue-200"]};
    margin-top: 1.5rem;

    max-height: 5.3125rem;
    overflow: hidden;
  }
`;
