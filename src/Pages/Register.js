import './register.css';

function register() {
    return (

        <div className="Register"  color="white">
        <h1>Health N' Wellness</h1> 
        <div class="registerbox">
        <h1 > Register </h1>

        <form class = "registerinputs">
        <label  >
          Username: &nbsp;&nbsp;
          <input type="text" name="username" />
        </label><br />
        <label >
          Email: &nbsp;&nbsp;&nbsp;
          <input type="text" name="email" />
        </label> <br />
        <label >
          FirstName: &nbsp;&nbsp;&nbsp;
          <input type="text" name="firstname" />
        </label> <br />
        <label >
          LastName: &nbsp;&nbsp;&nbsp;
          <input type="text" name="lastname" />
        </label> <br />
        <label >
          Password: &nbsp;&nbsp;&nbsp;
          <input type="password" name="password" />
        </label> <br />
        <button type="submit"> Register  </button>
        <br />
        </form>

        </div>
      
      </div>
    );
}

export default register;