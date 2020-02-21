import React from 'react';
import Register from '../components/auth/Register';
import { useDispatch, useSelector } from 'react-redux';


export default function DashboardPage() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<div className="flex h-full items-center justify-center">
			Dashboarding....
		</div>
	)
}

DashboardPage.meta = (state) => ({ title: 'Dashboard' })
