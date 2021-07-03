//import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App"  color="white">
      <h1>Health N' Wellness</h1> 
      <div class="loginbox">
      <h1 > Login </h1>

      <form class = "logininputs">
  <label>
    Username:
    <input type="text" name="username" />
  </label><br /><br />
  <label>
    Password:
    <input type="password" name="password" />
  </label> <br /> <br />
  <button type="submit"> Login  </button>
</form>
      </div>

    </div>
  );
}

export default App;
