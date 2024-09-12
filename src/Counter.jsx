import React from 'react'

const Counter = ({feedbacks}) => {
    const averagerating = feedbacks.reduce(
        (p , c)=>{
            return p + c.rating/feedbacks.length
        } , 0 )
  return (
    <div className='d-flex align-item-center justify-content-between'>
    <p>Total Reviews:{feedbacks.length}</p>
    <p> Average Rating:{averagerating.toFixed(1)}</p>
    </div>
  )
}

export default Counter