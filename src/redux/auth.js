import { ReduxModule } from 'react-pages';
import jwt_decode from "jwt-decode";

const redux = new ReduxModule();

export const loginUser = redux.action(
	'CURRENT_USER',
	(userData) => http => {
		return http.post('api://users/login', userData)
			.then(res => {
				// Set token to localStorage
				const { token } = res;
				localStorage.setItem("jwtToken", token);

				// Decode token to get user data
				const decoded = jwt_decode(token);

				return decoded;
			})
	},
	'user'
	// (state, res) => ({ ...state, user: 'asdfasdfsadf' })
)

export const registerUser = redux.action(
	(userData) => async http => {
		await http.post('api://users/register', userData)
			.then(res => {
				console.log(res, 'TEST');
			})
	}
)

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false
};

export default redux.reducer(initialState);

// ARTIFICIAL DELAY
const delay = (delay) => new Promise(resolve => setTimeout(resolve, delay))
