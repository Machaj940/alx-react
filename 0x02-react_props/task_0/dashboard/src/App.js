import './App.css'
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';

export default function App() {
  return (
    <div className="App">
      <Notifications />
      <>
        <Header />
        <Login />
        <Footer />
      </>
    </div>
  )
}
