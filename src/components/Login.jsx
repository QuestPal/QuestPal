import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username : '',
			password : '',
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();
	}


	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h1> Log In </h1>
				<div>
					<label className="control-label">Username</label>
					<input 
						value={this.state.username}
						onChange={this.onChange}
						type="text"
						name="username"
						className="form-control"
					/>
				</div>
				<div>
					<label className="control-label">Password</label>
					<input 
						value={this.state.password}
						type="password"
						name="password"
						className="form-control"
					/>
				</div>
			</form>
		)
	}
}