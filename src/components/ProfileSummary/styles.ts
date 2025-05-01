import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2rem;

  position: relative;
  top: -6rem;

  display: flex;
  justify-content: space-between;

  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["blue-700"]};
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;
`;

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

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
`;

export const SummaryDescription = styled.p`
  color: ${(props) => props.theme["blue-200"]};
  margin-top: 0.5rem;
  line-height: 1.5rem;
`;

export const SummaryFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 24.5625rem;
  margin-top: 2rem;
`;
export const SummaryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue-300"]};

  svg {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
