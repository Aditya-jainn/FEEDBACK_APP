import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({feedbacks , removefeedback , editfeedback}) => {
  return (
    
    <ul className='list-group my-2 '>
        {
            feedbacks.map(feedback => <ListItem key={feedback.id} feedback={feedback} removefeedback={removefeedback} editfeedback={editfeedback}/>)
        }
    </ul> 
    
  )
}

export default ListGroup