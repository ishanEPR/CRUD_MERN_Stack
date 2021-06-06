import React, { Component } from 'react';
import axios from 'axios';

 class App extends Component {
constructor(props){

  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount()
{
  this.retrievePosts();
}
retrievePosts()
{
  axios.get("http://localhost:8000/").then((res)=>{
    if(res.data)
    {
      this.setState({
        posts:res.this.data,
      });
      console.log(this.state.posts);
    }
  })
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
