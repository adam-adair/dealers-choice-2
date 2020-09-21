import React from "react"
import {Route} from "react-router-dom"
import InstructorList from './InstructorList'
import SingleInstructor from './SingleInstructor'
import CreateInstructor from './CreateInstructor'

export default class App extends React.Component {
	render () {
		return (
			<div>
				<h1>Build-a-Teacher</h1>
				<Route exact path='/' component={InstructorList} />
        <Route path='/instructor/:id' component={SingleInstructor} />
				<Route exact path='/create' component={CreateInstructor} />
			</div>
		)
	}
}
