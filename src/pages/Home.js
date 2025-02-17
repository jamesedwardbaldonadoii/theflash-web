import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Register from '../components/auth/Register';
import Dashboard from './Dashboard';

export default function HomePage() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<div className="flex h-full items-center justify-center">

			{isAuthenticated ? <Dashboard /> : <Register />}

		</div>
	)
}

// HomePage.meta = (state) => ({ title: 'Home' })
