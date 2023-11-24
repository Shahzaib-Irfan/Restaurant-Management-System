import React, { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => {
  const { loginWithAuthentication } = useUserContext();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        name="username"
        onChange={handleInputChange}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        onChange={handleInputChange}
      />
      <FormButton
        title="Log in"
        credentials={credentials}
        loginWithAuthentication={loginWithAuthentication}
      />
    </div>
  );
};

const FormButton = (props) => {
  const { loginWithAuthentication } = useUserContext();

  const handleLogin = async () => {
    await props.loginWithAuthentication(
      props.credentials.username,
      props.credentials.password
    );
    // Optionally, you can add further logic or redirection after successful login.
  };

  return (
    <div id="button" className="row">
      <button onClick={handleLogin}>{props.title}</button>
    </div>
  );
};

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Dont have an account?</label>
    <Link to="/signup">Sign Up</Link>
  </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

export default Login;
