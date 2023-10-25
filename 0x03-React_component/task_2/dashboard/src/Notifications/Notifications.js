import { Component } from 'react';
import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape'


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead= this.markAsRead.bind(this);
  }

  markAsRead(id) {
    if (typeof id == "number") {
      console.log(`Notification ${id} has been marked as read`)
    }
  }

  render () {
    let content;
    const { listNotifications } = this.props;

    if (listNotifications.length === 0) {
      content = <tr>No new notification for now</tr>
    }

    if (listNotifications.length >= 1) {
      content = listNotifications.map(row =>
        <NotificationItem key={row.id} type={row.type} html={row.html} value={row.value} markAsRead={this.markAsRead}/>
    )};

    return (
      <>{content}</>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: true
}

export default Notifications