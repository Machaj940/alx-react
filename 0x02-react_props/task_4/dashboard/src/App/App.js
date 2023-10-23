import './App.css'
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  let content;
  if (isLoggedIn) {
    content = <CourseList />
  } else {
    content = <Login />
  }
  return (
    <div className="App">
      <div className='header'>
        <Notifications />
        <Header />
      </div>
      <>
        <div>{content}</div>
        <Footer />
      </>
    </div>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: true
};

export default App