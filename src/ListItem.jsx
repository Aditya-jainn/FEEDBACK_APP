import React from 'react'

const ListItem = ({feedback , removefeedback , editfeedback}) => {
  return (
    <li className={feedback.rating > 3 ? 'list-group-item rounded-0 bg-success border border-black ': 'list-group-item rounded-0 bg-danger border border-black '}>
            <h1>Rating:{feedback.rating}</h1>
            <p>Review: {feedback.review}</p>
            <span className='float-end'>
                <button onClick={() => removefeedback(feedback.id)} className='btn btn-warning rounded-0  btn-sm mx-1 my-2'>Delete</button>
                <button onClick={() => editfeedback(feedback)} className='btn btn-primary rounded-0 btn-sm mx-1'>Edit</button>
            </span>
        </li>
  )
}

export default ListItem 