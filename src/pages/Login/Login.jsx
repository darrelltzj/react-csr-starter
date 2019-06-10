import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

const Login = () => <div>Login</div>;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({}, dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
