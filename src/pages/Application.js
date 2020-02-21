import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'react-pages';

// `react-time-ago` English language.
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
JavascriptTimeAgo.addLocale(en);

import Navbar from '../components/navbar/index';
import SideNavbar from '../components/navbar/SideNavbar';
import TopNavbar from '../components/navbar/TopNavbar';

import { authenticateUser } from '../redux/auth';

export default function App({ children }) {
	//Check if if user is authenticated;
	const dispatch = useDispatch();

	if (typeof window !== 'undefined') {
		dispatch(authenticateUser());
	}

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<div className="h-screen overflow-hidden">
			{/* Page loading indicator */}
			<Loading />

			{isAuthenticated ?
				<div className="flex flex-row bg-gray-100 h-full">
					<SideNavbar />

					<div className="flex-grow flex flex-col h-full">
						<div className="flex-shrink-0 w-full">
							<TopNavbar />
						</div>
						<div className="flex-grow">
							{children}
						</div>
					</div>
				</div> :
				<div className="flex flex-col bg-gray-100 h-full webpage">
					<Navbar />
					<div className="flex-grow webpage__content">
						{children}
					</div>

					<footer className="webpage__footer">
						{/* */}
					</footer>
				</div>
			}

		</div>
	)
}

App.propTypes = {
	children: PropTypes.node.isRequired
}
