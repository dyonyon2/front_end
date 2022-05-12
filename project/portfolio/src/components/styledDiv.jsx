import styled from "styled-components";

const StyledDivName = styled.div`
    color: red;
    width: 400px;
    height: 100px;
    background-color: white;
    font-size: 24px;
`;

export function Name({ children }) {
    return <StyledDivName>{children}</StyledDivName>;
}

const StyledDivFront = styled.div`
    color: red;
`;

export function Frontend({ children }) {
    return <StyledDivFront>{children}</StyledDivFront>;
}
