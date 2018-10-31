import React from 'react';
import {Input} from 'react-materialize'

class SearchBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState( { term: event.target.value } );
		this.props.onSearchTermChange(event.target.value);
	}

	render() {
		return (
			<div className="search-bar" >
				<Input
					s = {12}
					id="item"
					type="text"
					className="validate"
					placeholder="Enter item required"
					value = {this.state.term}
					onChange = {this.onInputChange}
				/>
			</div>
		);
	}
}

export default SearchBar;
