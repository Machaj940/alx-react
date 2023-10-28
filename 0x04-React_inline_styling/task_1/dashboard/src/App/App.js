import { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  componentDidMount () {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey === true && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', (event) => {
      if (event.ctrlKey === true && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  render () {
    const { isLoggedIn } = this.props;
    const listCourses = [{ id: 1, name: 'ES6', credit: 60 }, { id: 2, name: 'Webpack', credit: 20 }, { id: 3, name: 'React', credit: 40 }];
    const listNotifications = [{ id: 1, html: { __html: 'New course available' }, type: 'default', value: 'course' }, { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'resume' }, { id: 3, html: { __html: '<strong style="font-weight: 900">Urgent requirement</strong> - complete by EOD' }, type: 'urgent', value: 'EOD' }];
    let content;
    if (isLoggedIn) {
      content = <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>;
    } else {
      content = <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>;
    }

    return (
      <div className={css(styles.App)}>
        <div className='header'>
          <Notifications listNotifications={listNotifications} />
          <Header />
        </div>
        <>
          <div>{content}</div>
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {
  }
};

const styles = StyleSheet.create({
  App: {
    margin: 10,
  },
});

export default App;
