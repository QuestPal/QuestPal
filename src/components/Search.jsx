import React, { Component } from "react";
import { Route } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List from "./List.jsx";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
			input: "",
			questType: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e, i, v) {
    if (typeof v === "number") this.setState({ value: v, questType: e.target.value.innerHTML});
    else this.setState({ [e.target.name]: e.target.value });
  }
  onClick(e) {
    this.props.history.push("/result");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
              openImmediately={false}
            >
              <MenuItem value={1} primaryText="General" />
              <MenuItem value={2} primaryText="Algorithm" />
              <MenuItem value={3} primaryText="System Design" />
            </DropDownMenu>
            <TextField
              hintText="KeyWord Search"
              name="input"
              errorText="This field is required"
              onChange={this.handleChange}
            />
            <RaisedButton
              label="Search"
              primary={true}
              onClick={this.onClick}
            />
          </div>
          <List companyNames={["google", "facebook", "twitter"]} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Search;
