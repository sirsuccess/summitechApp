import React, { Component } from "react";


// import image from "./arrData";
import PostData from "./PostData/PostData"

class Main extends Component {
  state = {
   image: [],
    posts: [
            {
                id: 1,
                fName: "amani",
                lName: "Kanu",
                userName: "sirsuccess",
                gender: "male",
                title: "How to Train your Dragon",
                content: "qrqrrqrf"
            },
            {
                id: 2,
                fName: "amani",
                lName: "Kanu",
                userName: "sirsuccess",
                gender: "male",
                title: "Laura Ikeji Mocks Kanu",
                content: "eqwrqrq"
            },
            {
                id: 3,
                fName: "amani",
                lName: "Kanu",
                userName: "sirsuccess",
                gender: "male",
                title: "New Video - Killing Dem by Zlatan",
                content: "ertgrwfd"
            },
        ]
  }

  
  render() {
 
    return(
      <div>
        <h1>Val stories</h1>
      {this.state.posts.map(post => <li key={post.id}>{post.title} post by: {post.userName} <button className="btn btn-primary"> view</button>
        </li>)}
      <button>view more</button><br/>
      <PostData/>
       </div>
        )
    }
}
    
      

export default Main;