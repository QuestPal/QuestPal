import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
			questions: [''],
			index: 0,
			type: ['General'],
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleQuestion = this.handleQuestion.bind(this);
		this.addQuestion = this.addQuestion.bind(this);
		this.handleType = this.handleType.bind(this)
	}

	onChange(e) {
		this.setState({ companyName: e.target.value})
	}

	handleType(e) {
		const arr = this.state.type.slice();
		arr[e.target.name] = e.target.value;
		this.setState({type: arr})
	}

	handleQuestion(e) {
		const arr = this.state.questions.slice();
		arr[e.target.name] = e.target.value;
		this.setState({ questions: arr});
	}

	addQuestion(e) {
		const arr = this.state.questions.slice();
		const arr1 = this.state.type.slice();
		arr.push('');
		arr1.push('General');
		this.setState({index : this.state.index+1, questions: arr, type: arr1});
	}

	onSubmit(e) {
		e.preventDefault();
		if(this.state.companyName.length === 0) alert('Need Company Name');
		else {
			const questionResult = [];
			for(let i = 0 ; i <= this.state.index; i++) {
				questionResult.push({[this.state.type[i]]:this.state.questions[i]});
			}
			this.props.addQuestions(this.state.companyName, questionResult)
			this.setState({companyName: '', questions:[''], index: 0, value: ['General']})
		}
	}


	render() {
		const index = this.state.index;
		const arr = [];
		for(let i = 0 ; i<= index ;i++) {
			arr.push(<div className="form-group" key={i}>
			<label className="control-label">Question</label>
			<select name={i} onChange={this.handleType} value={this.state.type[i]} className="custom-select custom-select-lg mb-3">
				<option value='General' >General</option>
				<option value='Algorithm' >Algorithm</option>
				<option value='System Design' >System Design</option>
			</select>
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
				{arr}
				<button type="button" className="btn btn-dark" onClick={this.addQuestion} >Add Question</button>
				<button type="submit" className="btn btn-primary" > Submit </button>
			</form>
		)
	}
}

export default withRouter(connect(null, mapDispatchToProps)(Add));