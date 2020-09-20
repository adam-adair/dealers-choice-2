import React from "react"
import axios from 'axios'
import Instructor from './Instructor'
//import any sub-components

export default class InstructorList extends React.Component {
	//constructor to initialize state
	constructor () {
		super()
		this.state = {
			instructors: []
		}
	}
	//any lifecycle methods
	async componentDidMount(){
		const resp = await axios.get('/api/instructor')
		this.setState({ instructors: resp.data})

	}
	//any custom methods

	//render
	render () {
		return (
      <div>
        {/* <CreateInstructor /> */}
        {
          this.state.instructors.map(instructor => <Instructor instructor={instructor} key={instructor.id} />)
        }
      </div>
		)
	}
}
