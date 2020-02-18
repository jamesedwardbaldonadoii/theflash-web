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
		<div className="flex flex-col h-screen bg-teal-900 overflow-hidden">
			{/* Page loading indicator */}
			<Loading className="fixed bg-red-700 inset-0" />

			<div className="webpage">
				<Navbar />

				<div className="webpage__content">
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
