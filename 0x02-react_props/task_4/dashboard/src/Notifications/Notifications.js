import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({displayDrawer}) {
  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer ? <div className='Notifications'>
        <div className='noti-header'>
          <button className='btn' style={{ border: "none", background: "none", fontWeight: "700" }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>x</button>
          <p>Here is the list of notifications</p>
        </div>
        <ul>
          <NotificationItem html={{ __html: 'New course available' }} type="default" />
          <NotificationItem html={{ __html: 'New resume available' }} type="urgent"/>
          <NotificationItem html={{ __html: '<strong style="font-weight: 900">Urgent requirement</strong> - complete by EOD'}} type="urgent" />
        </ul>
      </div> : ''}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: true
}

export default Notifications