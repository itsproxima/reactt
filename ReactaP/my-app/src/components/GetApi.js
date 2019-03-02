import React, {Component} from 'react'
import axios from 'axios'


const mys={
    color:'hotpink'
}
class GetApi extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render(){
        const {posts}= this.state
        return(
            <div>
                list of posts
                {
                    posts.length?
                    posts.map(post=> <div  style={mys} key={post.id}>{post.title}</div>):
                    null
                }
            </div>
        )
    }
}

export default GetApi