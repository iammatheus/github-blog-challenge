import styled from "styled-components";

export const PostInfoContainer = styled.section`
  width: 100%;
  padding: 2rem;

  border-radius: 8px;

  background: ${(props) => props.theme["blue-700"]};

  position: relative;
  top: -6rem;
`;
export const PostInfoHeader = styled.header`
  div {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};

      height: 1.5rem;

      cursor: pointer;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h2 {
    margin-top: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const PostInfoFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 24.5625rem;
`;

export const PostInfoDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue-300"]};

  svg {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
