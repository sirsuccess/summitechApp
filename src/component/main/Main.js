import React, { Component } from "react";

// import update from 'react-addons-update';



// import image from "./arrData";
// import PostData from "./PostData/PostData";
import Slider from "./Slider/Slider";
import Profile from "./Profile"
import Modal from "./modal/Modal"
// import AlertButton from "./AlertButton"

class Main extends Component {
  state = {
      
  }
  render() {
    return (
      <div>
        <Slider />
        <div className="mainDiv m-r-5">
          <Profile />
          <Modal/>
          </div>
          
        </div>
          )
    
  }

}



export default Main;