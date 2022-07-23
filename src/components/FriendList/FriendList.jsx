import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

function FriendList({ items }) {
    const elements = items.map(item => (
        <FriendListItem key={item.id} {...item} />
    ));
    return <ul className={styles.list}>{elements}</ul>;
}

export default FriendList;

FriendList.defaultProps = {
    items: [],
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};