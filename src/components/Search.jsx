import React, { Component } from "react";
import { Route } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questType: "Question Type",
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClick(e) {
    this.props.history.push("/result");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DropDownMenu
            value={this.state.questType}
            name="questType"
            onChange={this.handleChange}
            openImmediately={true}
          >
            <MenuItem value={"General"} primaryText="General" />
            <MenuItem value={"Algorithm"} primaryText="Algorithm" />
            <MenuItem value={"System Design"} primaryText="System Design" />
          </DropDownMenu>
          <TextField
            hintText="KeyWord Search"
            name="input"
            errorText="This field is required"
            onChange={this.handleChange}
          />
          <RaisedButton label="Search" primary={true} onClick={this.onClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Search;
