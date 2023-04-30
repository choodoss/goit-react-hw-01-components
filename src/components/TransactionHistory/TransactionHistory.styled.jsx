import styled from "@emotion/styled";

export const Table = styled.table`
background-color: #d8d8d8;
border-radius: 1rem;
overflow: hidden;
border-collapse: collapse;
margin-top: 20px;
display: block;
`;

export const Thead = styled.thead`
display: block;
margin: 0;
color: #fff;
font-weight: 300;
background-color: #22bed3;
`;

export const Tbody = styled.tbody`
display: block;
`;

export const Line = styled.tr`
    display: flex;
    align-items: center;
`;
export const Cell = styled.th`
display: flex;
align-items: center;
justify-content: center;
    flex-basis: calc(100%/3);
    padding: 10px;
    border-right: 1px solid #fff;
    font-weight: 500;
    :last-child{
        border-right: none;
    }
`;