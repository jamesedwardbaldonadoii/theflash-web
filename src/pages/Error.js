import React from 'react'

export default function ErrorPage() {
	return (
		<section className="flex items-center justify-between h-full">
			<h1>
				Some kind of an error happened
			</h1>
		</section>
	)
}

ErrorPage.meta = state => ({ title: 'Error' })