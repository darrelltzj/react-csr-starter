import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

const Home = () => <div>Home</div>;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({}, dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home);
