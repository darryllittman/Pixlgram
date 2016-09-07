import React from 'react';
import { withRouter } from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ""};
  }


  render() {
    return (
      <div>
        <ul>
          Comments list here
        </ul>
        <textarea>Comment:</textarea>
      </div>
    );
  }
}
