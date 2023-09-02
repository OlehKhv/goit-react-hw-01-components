import PropTypes from 'prop-types';
import {
    FriendsList,
    FriendsListItem,
    IconAvatarFriend,
    IsOnlineStatus,
    NameFriend,
} from './Friendlist.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    $isOnline={friend.isOnline}
                />
            ))}
        </FriendsList>
    );
};

const FriendListItem = ({ avatar, name, $isOnline }) => {
    return (
        <FriendsListItem>
            <IsOnlineStatus
                className="status"
                $isOnline={$isOnline}
            ></IsOnlineStatus>
            <IconAvatarFriend src={avatar} alt="User avatar" />
            <NameFriend>{name}</NameFriend>
        </FriendsListItem>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
