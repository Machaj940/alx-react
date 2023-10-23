import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape'


function Notifications({listNotifications}) {
  let content;

  if (listNotifications.length === 0) {
    content = <tr>No new notification for now</tr>
  }

  if (listNotifications.length >= 1) {
    content = listNotifications.map(row =>
      <NotificationItem key={row.id} type={row.type} html={row.html} value={row.value} />
  )};
  
  return (
    <>{content}</>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: true
}

export default Notifications