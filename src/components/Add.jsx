import React, { Component } from 'react';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			questions: [],
			value: 1,
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleQuestion = this.handleQuestion.bind(this);
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
		let node = document.createElement('div');
		node.className = 'form-group';
		node.innerHTML = `<label className="control-label">Question</label>
		<input
			value={this.state.questions}
			onChange={this.handleQuestion}
			type="text"
			name={this.state.value}
			className="form-control"
		/>`
		document.getElementsByClassName('add').appendChild(node)
	}

	onSubmit(e) {
		e.preventDefault();
	}


	render() {
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
						value={this.state.questions}
						onChange={this.handleQuestion}
						type="text"
						name={this.state.value}
						className="form-control"
					/>
				</div>
				<button type="button" className="btn btn-primary" onClick={this.addQuestion} >Add Question</button>
			</form>
		)
	}
}

export default Add;