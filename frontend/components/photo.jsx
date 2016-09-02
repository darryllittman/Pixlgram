import React from 'react';
import { withRouter } from 'react-router';


const Photo = (props) => {return(
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
