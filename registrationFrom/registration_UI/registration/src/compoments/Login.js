import axios from "axios";

const Login = () => {

  // Call to API for storing data
  const calltoAPI = () => {
    const email = document.getElementById("email").value;
    const passowrd = document.getElementById("password").value;
    let flagEmailValidated = false;
    let flagEmailPassExist = false;

    if (!(email && passowrd)) {
      flagEmailPassExist = false;
      alert("Please provide all details");
    } else {
      flagEmailPassExist = true;
    }

    if (email) {
      flagEmailValidated = false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        flagEmailValidated = true;
        alert("Please enter valid email address");
      }
    } 

    if (flagEmailPassExist && flagEmailValidated) {
      axios
        .post("http://localhost:3001/validateUserDetails", {
          email,
          passowrd,
        })
        .then((response) => {
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong while validating data");
        });
    }
  };

  const CalltoHomePage = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div>
       
      </div>
      <div className="form-container">
      <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label>Email : </label>
            <input
              type="text"
              placeholder="Please enter email"
              id="email"
              style={{ "margin-left": "45px" }}
            ></input>
          </div>

          <div className="mb-3">
            <label>Password: </label>
            <input
              type="password"
              id="password"
              placeholder="Please enter Password"
              style={{ "margin-left": "20px" }}
            ></input>
          </div>

          <div className="mb-3">
            <button type="button" onClick={calltoAPI}>
              Submit
            </button>
            <button type="button" onClick={CalltoHomePage}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
