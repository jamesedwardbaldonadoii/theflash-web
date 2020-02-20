import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading } from 'react-pages';

// `react-time-ago` English language.
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
JavascriptTimeAgo.addLocale(en);

import Navbar from '../components/navbar/index';

export default function App({ children }) {
	return (
		<div className="h-screen overflow-hidden">
			{/* Page loading indicator */}
			<Loading />

			<div className="flex flex-col bg-gray-100 h-full d webpage">
				<Navbar />

				<div className="flex-grow webpage__content">
					{children}
				</div>

				<footer className="webpage__footer">
					{/* */}
				</footer>
			</div>
		</div>
	)
}

App.propTypes = {
	children: PropTypes.node.isRequired
}
