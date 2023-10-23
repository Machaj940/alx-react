import PropTypes from 'prop-types';

export default function NotificationItem({type, html, value}) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} value={value}></li>
  )
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: "default"
}