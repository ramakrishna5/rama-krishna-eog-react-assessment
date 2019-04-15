import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import MapView from './MapView';

class Location extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      loading,
      name,
      location
    } = this.props;
    if (loading) return <LinearProgress />;
    return (
      <MapView location={location}/>
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    data
  } = state.droneLocations;

  let locations = data['data'] || [];
  let location = locations[locations.length - 1] || {};

  return {
    loading,
    name,
    location
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE_LOCATION
    })
});

export default connect(
  mapState,
  mapDispatch
)(Location);
