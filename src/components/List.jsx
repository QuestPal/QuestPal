import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class List extends Component {
	constructor(props){
		super(props);
		this.state={
			redirect: false,
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		this.setState({redirect: true});
	}

	renderRedirect() {
		if(this.state.redirect) {
			return <Redirect to='/result' />
		}
	}

	render() {
		const compList = this.props.companyNames.map((name, i)=> {
			return <button key={name} value={name} className='btn btn-outline-info list-group-item' onClick={this.handleClick} >{name}</button>
		})
		return (
			<div>
				<ul className='list-group' style={{'column': '2'}}>
					{compList}
				</ul>
				{this.renderRedirect()}
			</div>
		)
	}
}

export default List;
