
import './App.css';


function App() {
  return (

    <div className="App"  color="white">
      <h1>Health N' Wellness</h1> 
      <div class="loginbox">
      <h1 > Login </h1>

      <form class = "logininputs">
  <label  >
    Username: &nbsp;&nbsp;
    <input type="text" name="username" />
  </label><br />
  <label >
    Password: &nbsp;&nbsp;&nbsp;
    <input type="password" name="password" />
  </label> <br />
  <button type="submit"> Login  </button>
  <br />
  <a class = "registerlink" href='./Register.js'>Not a member? Register here!</a> &nbsp;
  <a class = "recoverlink" href="#">Forgot Password? Click here!</a>
</form>

      </div>
      
    </div>
  );
}

export default App;
