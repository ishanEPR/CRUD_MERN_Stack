import React, { Component } from 'react';
import axios from 'axios';
//import posts from '../../models/posts';

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
  axios.get("http://localhost:8000/posts").then((res)=>{
    if(res.data.success)
    {
      this.setState({
        posts:res.data.existingPosts,
      });
      console.log(this.state.posts);
    }
  })
}

  render() {
    return (
      <div className="container">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Post Category</th>
            <th scope="col">Action</th>
          </tr>
          <tbody>

          {this.state.posts.map(posts=>(
          <tr>
            <td scope="row">{posts.topic}</td>
            <td>{posts.description}</td>
            <td>{posts.postCategory}</td>
          </tr>
        ))}
        
          </tbody>
        </thead>


      </table>
        
      </div>
    )
  }
}

export default App
