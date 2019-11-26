import React, { Component } from "react";
import { Icon, Intent, Button } from "@blueprintjs/core";
import axios from "axios";
import $ from "jquery";


class App extends Component {
  state = {
	name: "Web Tech. Stduy",
  };
  
//   componentDidMount() {
//   }
  
    render () {

        return (
            <div className="root-note">
                {this.state.name}
            </div>
        );
    }

}

export default App;