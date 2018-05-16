import React, { Component } from 'react';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			questions: [],
			value: 0,
			questFields: []
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleQuestion = this.handleQuestion.bind(this);
		this.addQuestion = this.addQuestion.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value})
	}

	handleQuestion(e) {
		const arr = this.state.questions.slice();
		arr[parseInt(e.target.name)] = e.target.value;
		this.setState({ questions: arr});
	}

	addQuestion(e) {
		this.setState({value : this.state.value+1});
	}

	onSubmit(e) {
		e.preventDefault();
	}


	render() {
		const index = this.state.value;
		const arr = [];
		for(let i = 0 ; i< index ;i++) {
			arr.push(<div className="form-group" key={i}>
			<label className="control-label">Question</label>
			<input 
				value={this.state.questions[i]}
				onChange={this.handleQuestion}
				type="text"
				name={i}
				className="form-control"
			/></div>);
		}

		return (
			<form className="add" onSubmit={this.onSubmit}>
				<h1> Input your questions </h1>
				<div className="form-group">
					<label className="control-label">Company Name</label>
					<input 
						value={this.state.companyName}
						onChange={this.onChange}
						type="text"
						name="companyName"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Question</label>
					<input 
						value={this.state.questions[0]}
						onChange={this.handleQuestion}
						type="text"
						name={0}
						className="form-control"
					/>
				</div>
				{arr}
				<button type="button" className="btn btn-primary" onClick={this.addQuestion} >Add Question</button>
			</form>
		)
	}
}

export default Add;