import React from 'react'
import {Link} from 'react-router-dom'

const Instructor = ({instructor}) => {
  return (
    <div>
      <Link to={`/instructor/${instructor.id}`}><h3>{instructor.name}</h3></Link>
    </div>
  )
}

export default Instructor
