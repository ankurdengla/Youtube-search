import React from 'react';

class SortRules extends React.Component{
	constructor(props) {
		super(props);
		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState( { term: event.target.value } );
		this.props.onSelectChange(event.target.value);
	}

	render() {
		return (
			<div className="sort-rules" >
                <select>
					<option value="title">Name</option>
					<option value="published">Published On</option>
				</select>	
			</div>
		);
	}
}

export default SortRules;