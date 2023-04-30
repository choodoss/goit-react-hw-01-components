import PropTypes from 'prop-types';
import { FriendCard, OnlineFlag, FriendAvatar, FriendName } from './Friend.styled';

export default function Friend({ friend: { avatar, isOnline, name } }) {
    const Friend =
        <FriendCard>
            <OnlineFlag isOnline={isOnline}></OnlineFlag>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
        </FriendCard>
    return Friend
}

Friend.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};



