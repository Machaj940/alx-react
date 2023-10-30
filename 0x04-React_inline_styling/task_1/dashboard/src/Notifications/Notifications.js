import { Component } from 'react';
import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


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

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
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
      <div className={css(styles.notifications)}>{content}</div>
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

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed #FF5A5F',
    padding: 20,
    float: 'right',
    marginTop: 10,
    width: 450,
  },
});


export default Notifications