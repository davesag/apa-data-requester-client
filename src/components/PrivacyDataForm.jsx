import React from 'react';
import {connect} from 'react-redux'
import {requested} from '../actions';

export const PrivacyDataForm = React.createClass({

  render: function() {
    if (!this.props.ready) return null;
    return (
      <form onSubmit={this.props.onSubmit}>
      <dl>
        <dt>Your full name</dt>
        <dd><input value={this.props.user.name}/></dd>
        <dt>Date of birth</dt>
        <dd><input type='date' value={this.props.user.dob} placeholder='dd/mm/yyyy'/></dd>
        <dt>Current residential address</dt>
        <dd><textarea /></dd>
        <dt>Contact email</dt>
        <dd><input type='email' value={this.props.user.email} /></dd>
        <dt>Details</dt>
        <dd><textarea value={this.props.details} /></dd>
        <dt>Some valid photo ID</dt>
        <dd><input type='file' /></dd>
        <dt>Save</dt>
        <dd><button type='submit'>Save</button></dd>
      </dl>
      </form>
    );
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    ready: !!state.server.connectionCount,
    user: state.user || {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: evt => {
      evt.preventDefault();
      const target = evt.target;
      const data = {
        name: target.elements[0].value
      }
      console.log('Submitting data to server', data);
      dispatch(requested(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyDataForm);
