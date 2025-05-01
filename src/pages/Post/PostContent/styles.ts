import styled from "styled-components";

export const PostContentContainer = styled.div`
  padding: 2rem;
  margin-top: -5rem;

  p {
    color: ${(props) => props.theme["blue-200"]};
    line-height: 1.7rem;
  }
`;
