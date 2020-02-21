import React, { useState, useCallback } from 'react';
import { Link } from 'react-pages';
import { useSelector } from 'react-redux'
import classnames from 'classnames';

// Import Assets Needed
import logo from '../../../assets/images/logo.png';

export default function Navbar() {
	const currentUser = useSelector(state => state.auth);

	console.log(currentUser);

	return (
		<div className="p-4 flex flex-row flex-wrap items-center justify-between bg-white">
			TOP
		</div >
	)
}
