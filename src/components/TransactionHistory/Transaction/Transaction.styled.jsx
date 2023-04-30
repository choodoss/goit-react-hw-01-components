import styled from "@emotion/styled";

export const Line = styled.tr`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ index }) => {
        if (index % 2 === 0) {
            return '#cccbcb';
        }
        return 'transparent';
    }};
    
`;
export const Cell = styled.td`
display: flex;
justify-content: center;
    flex-basis: calc(100%/3);
    padding: 10px;
    border-right: 1px solid #fff;
    font-weight: 300;
    :last-child{
        border-right: none;
    }
    :first-of-type{
        padding-left: 5vw; //не знаю як вирівняти так як у макеті(
        justify-content: flex-start;
}
`;
