import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../action/items';

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		addQuestions: actions.addQuestion,
	},dispatch)
}

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: '',
			questions: [{}],
			index: 0,
			value: [''],
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleQuestion = this.handleQuestion.bind(this);
		this.addQuestion = this.addQuestion.bind(this);
		this.handleType = this.handleType.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value})
	}

	handleType(e) {
		const arr = this.state.value.slice();
		arr[e.target.name] = e.target.value;
		this.setState({value: arr})
	}

	handleQuestion(e) {
		const arr = this.state.questions.slice();
		arr[e.target.name] = {[this.state.value[e.target.name]]:e.target.value};
		this.setState({ questions: arr});
	}

	addQuestion(e) {
		const arr = this.state.questions.slice();
		const arr1 = this.state.value.slice();
		arr.push({});
		arr1.push('');
		this.setState({index : this.state.index+1, questions: arr, value: arr1});
	}

	onSubmit(e) {
		e.preventDefault();
		if(this.state.companyName.length === 0) alert('Need Company Name');
		else {
			this.props.addQuestions(this.state.companyName, this.state.questions)
		}
	}


	render() {
		const index = this.state.index;
		const arr = [];
		for(let i = 1 ; i<= index ;i++) {
			arr.push(<div className="form-group" key={i}>
			<label className="control-label">Question</label>
			<select name={i} onChange={this.handleType} value={this.state.value[i]} className="custom-select custom-select-lg mb-3">
				<option value='General' >General</option>
				<option value='Algorithm' >Algorithm</option>
				<option value='System Design' >System Design</option>
			</select>
			<input 
				index={this.state.questions[i]}
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
					<select name={0} onChange={this.handleType} value={this.state.value[0]} className="custom-select custom-select-lg mb-3">
						<option value="General">General</option>
						<option value="Algorithm">Algorithm</option>
						<option value="System Design">System Design</option>
					</select>
					<input 
						index={this.state.questions[0]}
						onChange={this.handleQuestion}
						type="text"
						name={0}
						className="form-control"
					/>
				</div>
				{arr}
				<button type="button" className="btn btn-dark" onClick={this.addQuestion} >Add Question</button>
				<button type="submit" className="btn btn-primary" > Submit </button>
			</form>
		)
	}
}

export default connect(null, mapDispatchToProps)(Add);