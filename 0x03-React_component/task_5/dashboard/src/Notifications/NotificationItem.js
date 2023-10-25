import PropTypes from 'prop-types';
import { PureComponent  } from 'react';

class NotificationItem extends PureComponent {
  render () {
    const { type, html, value, markAsRead } = this.props;
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} value={value} onClick={() => markAsRead(2)}></li>
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

export default NotificationItem