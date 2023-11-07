import { React, useEffect, useState } from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <div>
      <center>
        <h2>Contact Us</h2>
      </center>
      <ReviewWrapper>
        <center>
          <form
            action={`https://smoggy-cheddar-banon.glitch.me/contactus/addquestion`}
            method="post"
          >
            <div className="center-box">
              <div className="form-box">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Anything You Want to Ask
                  </label>
                  <textarea
                    name="questionText"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="cool-button">
              Submit
            </button>
          </form>
        </center>
      </ReviewWrapper>
    </div>
  );
};

const ReviewWrapper = styled.div`
  .center-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form-box {
    border: 1px solid #ccc;
    padding: 20px;
    width: 400px;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  /* Base styles for the cool submit button */
  .cool-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #4caf50; /* Green background color */
    color: #fff; /* Text color */
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  /* Gradient background effect */
  .cool-button {
    background-image: linear-gradient(to right, #4caf50, #63a69f);
  }

  /* Hover effect */
  .cool-button:hover {
    background-image: linear-gradient(to right, #63a69f, #4caf50);
  }

  /* Optional: Add a box-shadow on hover for an additional effect */
  .cool-button:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default ContactUs;
