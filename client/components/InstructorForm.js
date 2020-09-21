/* eslint-disable react/jsx-key */
import React from 'react'


const InstructorForm = ({submit, onChange, instructor}) => {
    const {name} = instructor
    const selectOptions = {
      hair: [['none','dark','blue'],'Hair:'],
      facialHair: [['none','goatee'],'Facial Hair:'],
      shirt: [['none','turtleneck','t-shirt','colorful'],'Shirt:'],
      glasses: [['yes', 'no'],'Glasses:']
    }
    return (
      <form onSubmit={submit} >
        <label htmlFor = 'name'>Name:</label>
        <input name ='name' type = 'text' onChange={onChange} value={name}/>
        {Object.keys(selectOptions).map(opt=>{
          const val = opt !== 'glasses' ? instructor[opt] : (instructor[opt] ? 'yes' : 'no')
          return (
            <div key={opt}>
              <label htmlFor = {opt}>{selectOptions[opt][1]}</label>
              <select name ={opt} onChange={onChange} value={val}>
                {selectOptions[opt][0].map(_opt=> {
                  return (
                    <option key={_opt}value={_opt}>{_opt}</option>
                  )
                })}
              </select>
            </div>
          )
        })}
        <button disabled={instructor.name.length===0}>Submit</button>
      </form>
    )
}

export default InstructorForm
