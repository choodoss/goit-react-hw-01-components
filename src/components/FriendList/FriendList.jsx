import Friend from './Friend/Friend';
import PropTypes from 'prop-types';
import { FriendListCont } from './FriendList.styled';

export default function FriendList({ friends }) {
    const FriendList =
        <FriendListCont>
            {friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
        </FriendListCont>
    return FriendList;
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}