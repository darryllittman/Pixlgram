import { connect } from 'react-redux';
import UploadForm from './upload_form';
import {
  createPhoto,
  requestAllPhotos,
  requestSinglePhoto,
  requestDeletePhoto
} from '../actions/photos_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  requestAllPhotos: () => dispatch(requestAllPhotos()),
  requestSinglePhoto: (id) => dispatch(requestSinglePhoto(id)),
  requestDeletePhoto: (id) => dispatch(requestDeletePhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
