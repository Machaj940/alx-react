import './Login.css'

export default function Login() {
  return (
    <div className="body">
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email" id="emailLabel">Email: </label>
        <input id="email" type="email" />
        <label for="password" id="passwordLabel">Password: </label>
        <input id="password" type="password" />
        <button id="btn">OK</button>
      </div>
    </div>
  )
}