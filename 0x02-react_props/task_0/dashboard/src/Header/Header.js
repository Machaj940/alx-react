import logo from '../holb-logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt=""/>
      <h1>School dashboard</h1>
    </div>
  )
}