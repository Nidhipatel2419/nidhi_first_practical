const DisplayData = (props) => {
  
  const CalltoHomePage = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="form-container">
        <h3>You have registered with below details</h3>
        <form>
          <div className="mb-3 ml-20px">
            <label>First Name : </label>
            <label>{props?.firstname}</label>
          </div>
          <div className="mb-3">
            <label>Last Name : </label>
            <label>{props?.lastname}</label>
          </div>
          <div className="mb-3">
            <label>Email : </label>
            <label>{props?.email}</label>
          </div>

          <div className="mb-3">
            <label>City : </label>
            <label>{props?.city}</label>
          </div>

          <div className="mb-3">
            <label>State : </label>
            <label>{props?.state}</label>
          </div>

          <div className="mb-3">
            <label>Gender : </label>
            <label>{props?.gender === "M" ? "Male" : "Female"}</label>
          </div>

          <div className="mb-3">
            <label style={{ "margin-left": "15px" }}>Profile Image : </label>
            <label>{props?.profileimage}</label>
          </div>

          <div className="mb-3">
            <button type="button" onClick={CalltoHomePage}>
              Back
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

export default DisplayData;
