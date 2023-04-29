import css from 'components/Profile/Profile.module.css'
import PropTypes from 'prop-types';

export default function Profile({ avatar, location, stats: { followers, views, likes }, tag, username }) {
    const profile =
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="{username} avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css['stats-item']}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css['stats-item']}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css['stats-item']}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    return profile;
};

Profile.propTypes = {
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    tag: PropTypes.string,
    username: PropTypes.string
}



