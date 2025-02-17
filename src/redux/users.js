import { ReduxModule } from 'react-pages'

const redux = new ReduxModule()

export const getUsers = redux.action(
	'GET_USERS',
	() => async http => {
		await delay(1000)
		return await http.get('api://example/users')
	},
	'users'
)

export const addUser = redux.action(
	'ADD_USER',
	(user) => async http => {
		await delay(1500)
		await http.post('api://example/users', user)
	}
)

export const deleteUser = redux.action(
	'DELETE_USER',
	(id) => async http => {
		await delay(1000)
		await http.delete(`api://example/users/${id}`)
	}
)

const initialState = { users: [] }

// This is the Redux reducer which now
// handles the asynchronous actions defined above.
export default redux.reducer(initialState)

// "Sleep" using `Promise`
const delay = (delay) => new Promise(resolve => setTimeout(resolve, delay))
