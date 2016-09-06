import React from 'react';
import { withRouter } from 'react-router';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {caption: "", location: "", url: ""};
    this.upload = this.upload.bind(this);
    this.uploadCallback = this.uploadCallback.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.captionChange = this.captionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photoWaiting = false;
  }

  uploadCallback (error, results) {
    if(!error) {

      this.photoWaiting = true;
      this.setState({url: results[0].url});

    } else {
      console.log(error, results);
    }
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS, this.uploadCallback
    );
  }

  locationChange(e) {
    e.preventDefault();
    this.setState({location: e.currentTarget.value});
  }

  captionChange(e) {
    e.preventDefault();
    this.setState({caption: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
  }

  render() {
    let uploadButtonMessage;

    if (this.photoWaiting) {
      uploadButtonMessage = <label>"Photo Ready For Upload"
                              <img src={this.state.url} />
                            </label>;
    } else {
      uploadButtonMessage = "Select Photo";
    }

    return (
      <div className="upload-form">
        <h2>Add A Photo</h2>
        <button onClick={this.upload}>
          {uploadButtonMessage}
        </button>

        <label>Location:
          <input type="text" onChange={this.locationChange} />
        </label>

        <label>Caption:
          <input type="text" onChange={this.captionChange} />
        </label>

        <input type="submit" value="Add Photo" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default withRouter(UploadForm);
