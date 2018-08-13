import React, { Component } from 'react';
import countries from './countries.json'; // import countries data

class CountrySelector extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countries: countries.countries || [],
			selected: this.props.selected && this.props.selected.toUpperCase() || 'CL'
		};

		this.selectCountry = this.selectCountry.bind(this);
	}

	selectCountry(e) {
		var selected = e.target.value;

		this.setState({
			selected: selected
		});

		// do what you want with "selected" country

		if (window) {
			window.open('https://www.geonames.org/search.html?country=' + selected, 'popup')
		}
	}

	render() {
		var options = [];

		this.state.countries.map((e, i) => {
			options.push(<option key={i} value={e.countryCode}>{e.countryName}</option>);
		})

		return (
			<div className="CountrySelector">
				<select id="countries" className="form-control" type="select" value={this.state.selected} onChange={this.selectCountry}>
					<option value="">Select country</option>
					{options}
				</select>
			</div>
		);
	}
}

export default CountrySelector;