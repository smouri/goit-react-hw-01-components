import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    const userStatus = isOnline ? styles.online : styles.offline;
    return (
        <li className={styles.item}>
            <span className={userStatus}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}