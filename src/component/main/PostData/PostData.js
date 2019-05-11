import React, { Component } from "react";

import todo from "./todo"
class Post extends Component {
  state = {
    tweetInput: "",
    constLength: 5,
    arrInput: "this is state"
  };

  onChange = e => {
    console.log("this is working");
    this.setState({ tweetInput: e.target.value,
    arrInput: e.target.value});
  };
  handleSubmit=(e)=> {
    e.preventDefault();
alert("you have submited")
this.setState({
    arrInput: e.target.value 
})
  }
  render() {
    const { constLength, tweetInput } = this.state;
    let TweetStyle = "",
      back = "";
    if (tweetInput.length > 5) {
      TweetStyle = "red";
      back = "5px solid red";
    }

    return (
      <>
      <button>tell your story</button><br/>
      {this.state.arrInput}
      <div onSubmit={this.handleSubmit}><textarea
          name="story"
          id="story"
          cols="30"
          rows="10"
          style={({ color: TweetStyle }, { border: back })}
          onChange={this.onChange} 
        />
        <button >Share</button>
        <br /></div>
        <div style={{ color: TweetStyle }}>
          {tweetInput.length}/{constLength}
        </div>
        <todo/>
      </>
    );
  }
//   handleSubmit(e){
//     e.preventDefault();
//   }


}

export default Post;