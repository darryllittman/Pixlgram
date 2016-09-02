import React from 'react';
import { withRouter } from 'react-router';

const PhotoFeed = (props) => {
  const allPhotos = props.photos.map((photo) => {
    return <li><img src={photo.url} /></li>;
  });

  return (
    <ul>
      {allPhotos}
    </ul>
  );
};

export default withRouter(PhotoFeed);
