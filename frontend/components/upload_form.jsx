import React from 'react';
import { withRouter } from 'react-router';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    //form fields w/initial values
    this.state = {caption: "", location: "", url: ""};
    this.upload = this.upload.bind(this);
    this.uploadCallback = this.uploadCallback.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.captionChange = this.captionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadCallback (error, results) {
    if(!error) {
      //dispatch action to save url to state
      //FIXME:find where in results is url
      this.setState({url: results});
    } else {
      console.log(error, results);
    }
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, this.uploadCallback
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
    return (
      <div className="upload-form">

        <button onClick={this.upload}>
          Upload Photo
        </button>

        <label>Location:
          <input type="text" onChange={this.locationChange} />
        </label>

        <label>Caption:
          <input type="text" onChange={this.captionChange} />
        </label>

        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default withRouter(UploadForm);
