/* eslint-disable react/button-has-type */
import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import InstructorForm from './InstructorForm'

export default class SingleInstructor extends Component {
  constructor () {
    super()
    this.state = {
      instructor: {
        hair: '',
        facialHair: '',
        glasses: false,
        name: '',
        shirt: ''
      },
      loading: true,
      redirect: false
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
    this.delete = this.delete.bind(this)
  }

  async componentDidMount () {
    const id = this.props.match.params.id
    const res = await axios.get(`/api/instructor/${id}`)
    this.setState({...this.state, instructor: res.data, loading: false, })
  }

  onChange(ev){
    const val = ev.target.name !== 'glasses' ? ev.target.value : (ev.target.value==='yes')
    const instr = {...this.state.instructor, [ev.target.name] : val }
    this.setState({...this.state, instructor: instr, })
  }

  async delete(){
    await axios.delete(`/api/instructor/${this.state.instructor.id}`)
    this.setState({...this.state, redirect: true})
  }

  async submit(ev) {
    ev.preventDefault();
    await axios.put(`/api/instructor/${this.state.instructor.id}`,this.state.instructor)
  }

  render () {
    const { instructor } = this.state
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
        <button className='del' onClick={this.delete}>Delete</button>
      </div>
    )
  }
}
