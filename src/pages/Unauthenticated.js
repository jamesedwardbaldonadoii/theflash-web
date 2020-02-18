import React from 'react'


export default function Unauthenticated() {
	return (
		<section className="flex items-center justify-between h-full">
			<h1>
				You need to sign in to access this page
			</h1>
		</section>
	)
}

Unauthenticated.meta = { title: 'Unauthenticated' }