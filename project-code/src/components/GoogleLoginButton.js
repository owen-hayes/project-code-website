import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from '../utils/refreshToken';

const CLIENT_ID =
  "1019008002147-n1h03rgk36m4v1crh0hmohamjbnjcf73.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        email: "",
        img: "",
      },
    };
  }

    
  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      img: response.profileObj.img,
    };
    this.setState({ userInfo, isLoggedIn: true });
    refreshTokenSetup(response);
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
    response.status(400);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      email: "",
      img: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-12">
          {this.state.isLoggedIn ? (
            <div>
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    );
  }
}
export default GoogleLoginComponent;