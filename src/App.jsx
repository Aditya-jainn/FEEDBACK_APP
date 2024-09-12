import React, { useState } from 'react'
import Navbar from './Navbar'
import Maincontanier from './Maincontanier'
import ListGroup from './listgroup'
import Counter from './Counter'


function App() {
  const [feedbacks, setfeedbacks] = useState([]);
  const [edit, setedit] = useState({
    feedback: {},
    isedit: false,
  })

  const addfeedback = (feedback) =>{
         setfeedbacks([feedback, ...feedbacks]);
  };

  const removefeedback = (id) =>{
     setfeedbacks(feedbacks.filter((item) =>item.id !== id));
  };

  const editfeedback = (feedback) =>{
    setedit({
      feedback : feedback,
      isedit: true,
    })
  }

  const updatedfeedback = (updatedfeedback)=>{
    setfeedbacks(feedbacks.map(item => item.id === updatedfeedback.id ? updatedfeedback : item));

    setedit({
      feedback:{},
      isedit: false,
    });
  };










  return (
    <> 
    
      <Navbar /> 
      <div className='contanier p-5'>
      <Maincontanier addfeedback={addfeedback} edit={edit} updatedfeedback={updatedfeedback} /> 
      <Counter feedbacks={feedbacks}/> 
      <ListGroup feedbacks={feedbacks}  removefeedback={removefeedback} editfeedback={editfeedback}/>
      </div>
    </>
  )
}

export default App