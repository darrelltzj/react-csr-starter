import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

const Dashboard = () => <div>Dashboard</div>;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({}, dispatch),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Dashboard);
