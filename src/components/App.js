//This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import Explorer from './explorer/Explorer';

import {FilesData} from "../MockData";


class App extends React.Component {
  	render() {
		return(
			<div className="container-fluid">
					<Explorer folder={FilesData}></Explorer>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
	//debugger;
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(App);
