import { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  render () {
    const { isLoggedIn } = this.props;
    const listCourses = [{ id: 1, name: 'ES6', credit: 60 }, { id: 2, name: 'Webpack', credit: 20 }, { id: 3, name: 'React', credit: 40 }];
    const listNotifications = [{ id: 1, html: { __html: 'New course available' }, type: 'default', value: 'course' }, { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'resume' }, { id: 3, html: { __html: '<strong style="font-weight: 900">Urgent requirement</strong> - complete by EOD' }, type: 'urgent', value: 'EOD' }];
    let content;
    if (isLoggedIn) {
      content = <CourseList listCourses={listCourses} />;
    } else {
      content = <Login />;
    }

    return (
      <div className='App'>
        <div className='header'>
          <Notifications listNotifications={listNotifications} />
          <Header />
        </div>
        <>
          <div>{content}</div>
          <Footer />
        </>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: true
};

export default App;
