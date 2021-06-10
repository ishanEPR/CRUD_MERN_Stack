import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
    }


    handleInputChange=(e)=>{
        const {name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const {topic,description,postCategory}=this.state;

        const data={
            topic:topic,
            description:description,
            postCategory:postCategory
        }

        axios.post("/post/save",data).then(
            (res)=>{
                if(res.data.success)
                {
                    this.setState(
                       { topic:"",
                    description:"",
                    postCategory:""}

                    )
                }
            }
        )
        console.log(data);
    }
    render() {
        return(
            <div className="container">
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginTop:'15px'}}>
                        <label >Enter Topic</label>
                        <input type="text" className="form-control" name="topic"  placeholder="Enter Topic"
                        value={this.state.topic}
                            onChange={this.handleInputChange
    
                                //setName(e.target.value);
                            }
                        />
                        
                    </div>
    
                    <div className="form-group">
                        <label for="age">Enter Description</label>
                        <input type="text" className="form-control" name="description"  placeholder="Enter Description"
                        value={this.state.description}
                            onChange={this.handleInputChange}
                        />
                        
                    </div>
    
                    <div className="form-group">
                        <label for="gender">Enter Post Category</label>
                        <input type="text" className="form-control" name="postCategory"  placeholder="Enter Post Category" 
                        value={this.state.postCategory}
                        onChange={
                            this.handleInputChange
                        }/>
                        
                    </div>
                   
                    <button type="submit" class="btn btn-primary" style={{marginTop:20}}
                    onClick={this.onSubmit}
                    >Submit</button>
                </form>
            </div>
        );
    }
}
