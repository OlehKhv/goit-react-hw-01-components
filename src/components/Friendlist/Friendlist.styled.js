import styled from 'styled-components';

export const FriendsList = styled.ul`
    width: 300px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FriendsListItem = styled.li`
    height: 80px;
    display: flex;
    align-items: center;
    gap: 8px;

    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
`;

export const IsOnlineStatus = styled.span`
    margin-left: 20px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
`;

export const IconAvatarFriend = styled.img`
    margin-left: 20px;
    width: 48px;
`;

export const NameFriend = styled.p`
    margin-left: 20px;
    font-size: 20px;
    color: #1c2833;
`;
