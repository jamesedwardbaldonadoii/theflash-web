import React from 'react'

export default function Unauthorized() {
	return (
		<section className="flex items-center justify-between h-full">
			<h1>
				You're not authorized to perform this action
			</h1>
		</section>
	)
}

Unauthorized.meta = { title: 'Unauthorized' }