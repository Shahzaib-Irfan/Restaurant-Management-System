import React from "react";
import styled from "styled-components";
import Character1 from "../assets/ToyFaces_Tansparent_BG_49.png"; // replace with your character image path
import Character2 from "../assets/ToyFaces_Tansparent_BG_29.png";
import Logo from "../assets/Group 66-1.png";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <Landing>
      <div className="app">
        <div className="background">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="characters">
            <img src={Character1} alt="Character 1" className="character" />
            <img
              src={Character2}
              alt="Character 2"
              className="character character-2"
            />
          </div>
          <Link to="/home" className="get-started">
            <h4>Get Started</h4>
          </Link>
        </div>
      </div>
    </Landing>
  );
};

const Landing = styled.div`
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .background {
    background: linear-gradient(to right, red, orange);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .characters {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
  }

  .character {
    width: 30%;
    height: 100%;
  }
  .character-2 {
    z-index: 1;
  }

  .get-started {
    height: 80px;
    width: 350px;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: white;
    color: black;
    cursor: pointer;
  }

  .get-started h4 {
    font-size: 18px;
    font-weight: bolder;
    text-decoration: none;
    color: red;
  }

  @media (max-width: 768px) {
    .characters {
      display: flex;
      justify-content: space-around;
      margin: 0 20px 0 20px;
      gap: 0;
      width: 100%;
      height: 70%;
    }
    .character {
      width: 100%;
      height: 100%;
    }
  }
`;

export default App;
