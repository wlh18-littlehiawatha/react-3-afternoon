import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/api/posts`).then(results => {
      this.setState({ posts: results.data});
    });
  }

  updatePost(id,text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then( results => {
      console.log(results)
    //this.setState.post({updatePost: }) ------> my efforts resulted in wrong code
    this.setState({posts: results.data});
  });
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then(results => {
      console.log(results)
      this.setState({posts: results.data});
    });
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, {text}).then(results => {
      console.log(results)
      this.setState({posts: results.data});
    });
  }

  render() {
    console.log(this.state)
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn = {this.createPost}/>
          {
            posts.map( post => (
              <Post key = {post.id}
                      id = {post.id}  // Add a new prop to the map called id that equals the post's id.
                      text = {post.text}        // text - Should equal the post's text.
                      date = {post.date}   // Update POST TEXT GOES HERE to equal the value of text on props.
                      updatePostFn = {this.updatePost} // Pass the updatePost method down as a prop called updatePostFn in the posts map.
                      deletePostFn = {this.deletePost}
                      
                      />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;


































































































// import React, { Component } from 'react';
// import axios from 'axios'

// import './App.css';

// import Header from './Header/Header';
// import Compose from './Compose/Compose';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       posts: []
//     };

//     this.updatePost = this.updatePost.bind(this);
//     this.deletePost = this.deletePost.bind(this);
//     this.createPost = this.createPost.bind(this);
//   }

//   componentDidMount() {
//     axios.get('https://practiceapi.devmountain.com/api/posts').then(results => {
//       this.setState({ posts: results.data });
//     });

//   }

//   updatePost() {

//   }

//   deletePost() {

//   }

//   createPost() {

//   }

//   render() {
//     const { posts } = this.state;

//     // let postsMapped = posts.map( post => (
//     //   <Post key={ post.id } />
//     // ))

//     return (
//       <div className="App__parent">
//         <Header />

//         <section className="App__content">

//           <Compose />

//           {
//             posts.map(post => (
//               <Post key={post.id} />
//             ))
//           }

//         </section>
//       </div>
//     );
//   }
// }

// export default App;
