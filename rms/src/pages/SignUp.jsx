import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div id="loginform">
        <FormHeader title="SignUp" />
        <Form />
        <OtherMethods />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <form action="http://localhost:3005/userApi/users" method="post">
      <FormInput
        description="First Name"
        placeholder="first name"
        type="text"
        name="firstName"
      />
      <FormInput
        description="Last Name"
        placeholder="last name"
        type="text"
        name="lastName"
      />
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        name="username"
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
      />
      <FormInput
        description="Email"
        placeholder="Enter your email"
        type="email"
        name="email"
      />
      <FormInput
        description="Date of Birth"
        placeholder="Enter your DOB"
        type="date"
        name="dob"
      />
      <FormButton title="Sign Up" />
    </form>
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button type="submit">{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
    />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Already Have an Account?</label>
    <Link to="/login">Login</Link>
  </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

export default SignUp;
