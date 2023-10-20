import React from 'react';
import './Notifications.css';
import getLatestNotification from "./utils"

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
      <button style={{ position: "absolute", top: "20px", right: "20px", border: "none", background: "none", fontWeight: "700" }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>x</button>
    </div>
  );
}