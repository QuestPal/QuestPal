import React, { Component } from "react";
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

	//Handle question type changes from user selection
  handleChange(e, i, v) {
    if (typeof v === "number") {
			this.setState({ value: v, questType: e.target.innerHTML})
		}
		else this.setState({ [e.target.name]: e.target.value });
	}
	
  onClick(e) {
    this.props.history.push("/result");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="searchContainer">
          <div className="searchBar">
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
							openImmediately={false}
							style={{fontSize: '17px'}}
							underlineStyle={{color:'rgb(0, 183, 255)'}}
							labelStyle={{color: 'white'}}
            >
              <MenuItem value={1} primaryText="General" />
              <MenuItem value={2} primaryText="Algorithm" />
              <MenuItem value={3} primaryText="System Design" />
            </DropDownMenu>
            <TextField
							style={{margin: '7px 0 8px', fontSize: '20px'}}
              hintText="KeyWord Search"
              name="input"
							value={this.state.input}
							errorText="This field is required"
							errorStyle={{color: 'rgb(0, 183, 255)'}}
              onChange={this.handleChange}
            />
            <RaisedButton
							style={{margin: '12px 0 16px 0', borderRadius: '5px'}}
							buttonStyle={{borderRadius: '5px'}}
              label="Search"
              primary={true}
              onClick={this.onClick}
            />
          </div>
          <List companyNames={this.props.names} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Search;
