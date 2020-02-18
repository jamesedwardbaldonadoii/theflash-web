import React from 'react';
import Register from '../components/auth/Register';


export default function HomePage() {
	return (
		<div className="flex items-center justify-center">
			<Register />
		</div>
	)
}

// HomePage.meta = (state) => ({ title: 'Home' })
