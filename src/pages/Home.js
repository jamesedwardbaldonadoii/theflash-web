import React from 'react';
import Register from '../components/auth/Register';


export default function HomePage() {
	return (
		<div className="flex h-full items-center justify-center">
			<Register />
		</div>
	)
}

// HomePage.meta = (state) => ({ title: 'Home' })
