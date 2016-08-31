import { connect } from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = state => ({
  AuthForm: AuthForm
});

export default connect(mapStateToProps)(AuthForm);
