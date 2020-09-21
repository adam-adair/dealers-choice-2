import React from "react"
import axios from 'axios'
import Instructor from './Instructor'
import {Link} from 'react-router-dom'

export default class InstructorList extends React.Component {

	constructor () {
		super()
		this.state = {
			instructors: []
		}
	}

	async componentDidMount(){
		const resp = await axios.get('/api/instructor')
		this.setState({ instructors: resp.data})
	}

	render () {
		return (
      <div>
			<Link to="/create">
				<button type="button">
				Create New Teacher
				</button>
			</Link>
        {
          this.state.instructors.map(instructor => <Instructor instructor={instructor} key={instructor.id} />)
        }
      </div>
		)
	}
}
