import styled from "@emotion/styled";

export const Item = styled.li`
display: flex;
flex-basis: calc(100% / ${({ numSim }) => numSim});
justify-content: center;
align-items: center;
padding: 10px;
margin: 0;
flex-direction: column;
background-color: ${({ color }) => color};
`;

export const Label = styled.span`
color: #fff;
`;

export const Percentage = styled.span`
color: #fff;
`;



