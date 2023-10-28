import logo from '../holb-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


export default function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img className={css(styles.img)} src={logo} alt=""/>
      <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  AppHeader: {
    width: '100%',
    borderBottom: '3px solid #FF5A5F',
    height: 160,
  },
  
  AppHeaderH1: {
    display: 'inline-block',
    fontSize: 30,
    fontWeight: 900,
    marginLeft: 15,
    position: 'relative',
    bottom: 70,
    color: '#FF5A5F',
  },
  
  img: {
    width: 150,
    height: 150
  },
});