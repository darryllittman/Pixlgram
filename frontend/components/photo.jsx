import React from 'react';
import { withRouter } from 'react-router';


class Photo extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount() {
    this.photos = this.props.requestAllPhotos();
    this.id = this.props.location.pathname.slice(8);
  }

  render() {
    if (this.props.photos[this.id]) {
      return (
        <ul>
          <li>
            <img src={this.props.photos[this.id].url} />
          </li>
          <li>
            {this.props.photos[this.id].caption}
          </li>
          <li>
            {this.props.photos[this.id].location}
          </li>
        </ul>
      );
    } else {
      return (
        <div>
          loading...
        </div>
      );
    }
  }
}

export default withRouter(Photo);
