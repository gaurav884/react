import React from 'react';
import {useNavigate} from "react-router-dom"

const About = () => {

    const navigate = useNavigate();

  function onClickHandler(){
      navigate("/contact")
    //   navigate(-1)
  }

  return <div>
    <h1> About page</h1>
    <button onClick={()=>{onClickHandler()}}>contact</button>
  </div>;
};

export default About;
