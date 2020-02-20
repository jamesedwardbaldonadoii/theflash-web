import React, { useState, useCallback } from 'react';
import { Link } from 'react-pages';
import classnames from 'classnames';


import Login from '../auth/Login';
// Import Assets Needed
import logo from '../../../assets/images/logo.png';
import SearchIcon from '../../../assets/images/svg_icon/search.svg';
import HamburgerIcon from '../../../assets/images/svg_icon/hamburger.svg';

export default function Navbar() {
	const [isShowLogin, setShowLogin] = useState(false);

	return (
		<nav className="p-4 flex flex-wrap items-center justify-between bg-white shadow-sm">
			<Link to="/" className="mr-6 flex flex-shrink-0 items-center text-gray-700">
				<img className="mr-2 w-12 h-12" src={logo} />
				<span className="font-semibold text-xl tracking-tight">Nombre</span>
			</Link>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:border-gray-900 hover:text-gray-900">
					<HamburgerIcon className="fill-current h-3 w-3" />
				</button>
			</div>
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow transition duration-500"></div>
				<div className="mr-2 relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center transition-all duration-500">
						<SearchIcon className="fill-current pointer-events-none text-gray-700 w-4 h-4" />
					</div>

					<input type="text" className="float-right transition-width duration-500 focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-40 focus:w-full items-end appearance-none" placeholder="Search John Doe" />
				</div>
				<div className={classnames("relative", { hidden: false })}>
					<button onClick={() => setShowLogin(!isShowLogin)} className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-gray-900 hover:text-gray-900 mt-4 lg:mt-0" >
						Login
					</button>

					{isShowLogin &&
						<div className="w-64 mt-1 absolute right-0 rounded animated bounceInRight duration-500ms">
							<Login />
						</div>
					}
				</div>
			</div>
		</nav >
	)
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import classnames from "classnames";

// import Login from "../auth/Login";
// import { toggleLogin } from "../../actions/toggleActions";


// class Navbar extends Component {
//   constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		const { auth, toggleLogin, toggle: { login } } = this.props;

// 	}
// }

// Navbar.propTypes = {
// 	auth: PropTypes.object.isRequired,
//   toggle: PropTypes.object.isRequired,
// 	toggleLogin: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
// 	auth: state.auth,	
//   toggle: state.toggle
// });

// export default connect(
//   mapStateToProps,
//   { toggleLogin }
// )(Navbar);
