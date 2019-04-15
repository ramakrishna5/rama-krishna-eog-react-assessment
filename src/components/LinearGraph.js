import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChipRaw from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import Plot from 'react-plotly.js';

class LinearGraph extends Component {
  constructor(props){
    super(props);
    this.state = {locations: []};
  }

  componentDidMount() {
    this.props.initial();
  }

  render() {
    const {
      loading,
      name,
      locations
    } = this.props;

    if (loading) return <LinearProgress />;
    return (
      <Plot
      data={[
        {
          x: locations ? locations.map(pos => pos['timestamp']) : [],
          y: locations ? locations.map(pos => pos['metric']) : [],
          type: 'graph',
          mode: 'lines+points',
          marker: {color: 'darkblue'},
        }
      ]}
          layout={{
              title: 'Sample Drone temperature',
              xaxis1: {
                type: 'date',
                tickFormat: '%H~%M'
              },
              width: 1200,
              height: 'auto'
            }}
                />
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    data
  } = state.droneLocations;
  let locations = data['data'];

  return {
    loading,
    name,
    locations
  };
};

const mapDispatch = dispatch => ({
  initial: () =>
    dispatch({
      type: actions.FETCH_DRONE_LOCATION
    })
});

export default connect(
  mapState,
  mapDispatch
)(LinearGraph);
