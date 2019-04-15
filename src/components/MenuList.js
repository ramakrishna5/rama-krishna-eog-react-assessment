import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Location from "./Location";
import LinearGraph from "./LinearGraph";

class MenuList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 0
    }
  }

  updateTab = (event, selectedTab) => {
      this.setState({ selectedTab });
    };

  render() {
    const { selectedTab } = this.state;

    function TabContainer(props) {
      return (
        <div>
          {props.children}
        </div>
      );
    }

    return(
      <div>
        <AppBar position="static">
        <Tabs value={selectedTab} onChange={this.updateTab}>
          <Tab label="Drone Location" />
          <Tab label="Drone Plot" />
        </Tabs>
      </AppBar>
        {selectedTab === 0 && <TabContainer>
          <Location />
          </TabContainer>
        }
        {selectedTab === 1 && <TabContainer>
          <LinearGraph />
        </TabContainer>
      }
      </div>
  )
  }
}


export default MenuList;
