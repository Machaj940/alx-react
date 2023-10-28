import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <div className="body">
      <div className="App-body">
        <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
        <label for="email" id="emailLabel" className={css(styles.emailLabel)}>Email: </label>
        <input id="email" type="email" />
        <label for="password" id="passwordLabel" className={css(styles.passwordLabel)}>Password: </label>
        <input id="password" type="password" />
        <button id="btn" className={css(styles.btn)}>OK</button>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  AppBodyP: {
    marginLeft: 60,
    marginTop: 45,
    marginBottom: 20,
    fontWeight: 700,
  },
  
  emailLabel: {
    marginLeft: 60,
  },
  
  passwordLabel: {
    marginLeft: 10,
  },
  
  btn: {
    marginLeft: 10,
  }
});