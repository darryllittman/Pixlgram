// import React from 'react';
// import { withRouter } from 'react-router';


// class Photo {
//   constructor (props){
//     super(props);
//     this.url = "";
//   }
//
//   componentDidMount() {
//     this.url = this.props.photo.url;
//   }
//
//   render() {
//     return(
//       <div>
//         <img src={this.url} />
//
//         <header className="photo-header">
//           <h4>username here</h4>
//         </header>
//
//         <ul className="comment-list">
//           <li>likes list here</li>
//           <li>comment</li>
//           <li>comment</li>
//           <li>comment</li>
//         </ul>
//
//         <textarea className="add-comment"></textarea>
//       </div>
//     );
//   }
// }
//   //src = props.photo.url
//
//
//   // debugger
//   // src={props.photo.url}
//
//
// export default withRouter(Photo);




import React from 'react';
import { withRouter } from 'react-router';


const Photo = (props) => {
  //src = props.photo.url


  // debugger
  // src={props.photo.url}
  return(
  <div>
    <img src="" />

    <header className="photo-header">
      <h4>username here</h4>
    </header>

    <ul className="comment-list">
      <li>likes list here</li>
      <li>comment</li>
      <li>comment</li>
      <li>comment</li>
    </ul>

    <textarea className="add-comment"></textarea>
  </div>
);};


export default withRouter(Photo);
