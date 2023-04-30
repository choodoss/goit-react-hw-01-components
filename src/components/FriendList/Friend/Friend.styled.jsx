import styled from "@emotion/styled";

export const FriendCard = styled.li`
padding: 5px 15px;
background-color: #fff;
margin: 0;
display: flex;
align-items: center;
gap: 15px;
border-radius: 1rem;
box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
overflow: hidden;
`;
export const OnlineFlag = styled.span`
border-radius: 50%;
width: 10px;
height: 10px;
background-color: ${({ isOnline }) => {
        if (isOnline) {
            return '#008000'
        } else {
            return '#e70f0f'
        }
    }};
`;
export const FriendAvatar = styled.img`
display: block;
border-radius: 1rem;
width: 50px;
overflow: hidden;
`;
export const FriendName = styled.p`
font-weight: 500;
`;