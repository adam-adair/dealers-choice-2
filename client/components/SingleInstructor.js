import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleInstructor extends Component {
  constructor () {
    super()
    this.state = {
      instructor: {}
    }
  }

  async componentDidMount () {
    const id = this.props.match.params.id
    const res = await axios.get(`/api/instructor/${id}`)
    this.setState({instructor: res.data})
  }

  render () {
    const { instructor } = this.state

    return (
      <div>
        <h3>Name: {instructor.name}</h3>
        <h3>Hair: {instructor.hair}</h3>
        <h3>Facial Hair: {instructor.facialHair}</h3>
        <h3>Shirt: {instructor.shirt}</h3>
        <h3>Glasses: {instructor.glasses ? 'Yes' : 'No'}</h3>
        <Link to='/'>Back</Link>
        <div>
          <img src='bg.png'/>
          <img src='head.png'/>
          <img src={instructor.facialHair+'.png'}/>
          <img src={instructor.hair+'.png'}/>
          <img src={instructor.shirt+'.png'}/>
          {instructor.glasses ? <img src='glasses.png'/> : '' }
        </div>
      </div>
    )
  }
}
