import React, { useState, useCallback } from 'react';
import { Link } from 'react-pages';
import { useSelector } from 'react-redux'
import classnames from 'classnames';

// Import Assets Needed
import logo from '../../../assets/images/logo.png';

export default function Navbar() {
	const currentUser = useSelector(state => state.auth);

	return (
		<nav className="flex flex-col h-full p-2 flex-shrink-0 bg-gray-900 items-center">
			<Link to="/" className="mb-10 flex flex-shrink-0">
				<img className="w-10 h-10" src={logo} />
			</Link>
			<Link to="/" className="mb-6 flex flex-shrink-0 text-gray-700 text-2xl text-red-100 p-2 rounded border-white border-solid transition-borderRadius duration-75s bg-gray-700 hover:rounded-full">
				<i className="iconmoon icon-home"></i>
			</Link>
			<Link to="/" className="mb-6 flex flex-shrink-0 text-gray-700 text-2xl text-red-100 p-2 rounded border-white border-solid transition-borderRadius duration-75s bg-gray-700 hover:rounded-full">
				<i className="iconmoon icon-envelop"></i>
			</Link>
		</nav>
	)
}
