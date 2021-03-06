import React from 'react';
import { withRouter } from 'react-router';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.photos = this.props.requestAllPhotos();
  }

  render() {
    if (this.props.photos[1]) {
      let allPhotos = Object.keys(this.props.photos);
      allPhotos = allPhotos.slice(0, allPhotos.length - 2).reverse();
      allPhotos = allPhotos.slice(0, 20);
      const listItems = allPhotos.map ((id) => {
        return <ul key={id}>
                  <li>
                    <img src={this.props.photos[id].url} />
                  </li>
                  <li>
                    {this.props.photos[id].caption}
                  </li>
                  <li>
                    {this.props.photos[id].location}
                  </li>
                </ul>;
      });

      return (
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          loading photos
        </div>
      );
    }
  }
}

export default withRouter(PhotoFeed);
