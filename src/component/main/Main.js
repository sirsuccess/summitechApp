import React, { Component } from "react";

// import update from 'react-addons-update';



// import image from "./arrData";
// import PostData from "./PostData/PostData";
import Slider from "./Slider/Slider";
import Profile from "./Profile"
import Modal from "./modal/Modal"
import Navbar from "./Navbar/Navbar"
// import Poki from "./Slider/SliderAPI"
import Instruction from "./Instruction/Instruction"

class Main extends Component {
  state = {
      
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Slider />
        <div className="mainDiv">
          <Profile />
          <Modal/>
          <Instruction/>
          </div>
          
          
        </div>
          )
    
  }

}



export default Main;