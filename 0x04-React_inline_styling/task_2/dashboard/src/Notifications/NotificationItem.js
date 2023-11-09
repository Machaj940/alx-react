import PropTypes from 'prop-types';
import { PureComponent  } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render () {
    const { type, html, value, markAsRead } = this.props;
    return (
      <li className={type === "default" ? css(styles.default) : css(styles.urgent)} data-notification-type={type} dangerouslySetInnerHTML={html} value={value} onClick={() => markAsRead(2)}></li>
    )
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
  type: "default",
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default NotificationItem