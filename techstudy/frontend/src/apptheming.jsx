import React, { Component } from "react";
import { Icon, Intent, Button, HTMLSelect } from "@blueprintjs/core";


class AppTheming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uiTheme: "theme-light",
      themes: [{label: "Light Theme", value: "theme-light"}, {label: "Dark Theme", value: "theme-dark"}]
    };
}
    componentDidMount() {
        console.log('componentDidMount:')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount:')
    }


    onThemeChange = (e) =>{
        this.setState({uiTheme: e.target.value});
    }



  render() {
    return (
      <div className="app-root">
          <div className="theme-selector">
            <HTMLSelect options={this.state.themes} onChange={this.onThemeChange} />
          </div>

            <div className={this.state.uiTheme}>
                <div className="app-container">
                <h1 className="ui-com">{this.state.uiTheme} theme</h1>
                <div className="ui-button">
                        <Button className={`${this.state.themes}-clickBtn`} text="Click Me" small={true} />
                </div>
                </div>
            </div>
      </div>
    );
  }
}

export default AppTheming;
