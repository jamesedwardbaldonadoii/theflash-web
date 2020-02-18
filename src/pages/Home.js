import React from 'react'

import icon from '../../assets/images/icon.png'


export default function HomePage() {
	return (
		<section className="flex items-center justify-between">
			<h1>
				Husky
			</h1>

			<img
				src={icon}
				className="home-page-image" />
		</section>
	)
}

HomePage.meta = (state) => ({ title: 'Home' })
