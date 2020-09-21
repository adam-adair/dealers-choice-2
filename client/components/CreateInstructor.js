import React, {Component} from 'react'
import InstructorForm from './InstructorForm'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

export default class CreateInstructor extends Component {
  constructor () {
    super()
    this.state = {
      instructor: {
        hair: 'none',
        facialHair: 'none',
        glasses: false,
        name: '',
        shirt: 'none'
      },
      redirect: false
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  onChange(ev){
    const val = ev.target.name !== 'glasses' ? ev.target.value : (ev.target.value==='yes')
    const instr = {...this.state.instructor, [ev.target.name] : val }
    this.setState({...this.state, instructor: instr, })
  }

  async submit(ev) {
    ev.preventDefault();
    await axios.post(`/api/instructor/${this.state.instructor.id}`,this.state.instructor)
    this.setState({...this.state, redirect: true})
  }


  render() {
    const {instructor} = this.state
    if(this.state.redirect) return (<Redirect to='/'/>)

    return (
      <div>
        <InstructorForm instructor={instructor} submit={this.submit} onChange={this.onChange}/>
        <Link to='/'>Back</Link>
        {this.state.loading ? 'Loading' :
          <div id='pic'>
            <img src='bg.png'/>
            <img src='head.png'/>
            <img src={instructor.facialHair+'.png'}/>
            <img src={instructor.hair+'.png'}/>
            <img src={instructor.shirt+'.png'}/>
            {instructor.glasses ? <img src='glasses.png'/> : '' }
          </div>
        }
      </div>
    )
  }
}

