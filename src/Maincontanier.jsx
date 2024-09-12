import React, { useEffect, useState } from 'react';

const Maincontanier = ({ addfeedback, edit , updatedfeedback }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isedit ? updatedfeedback({id: edit. feedback.id, rating, review})
    : addfeedback({
      id: crypto.randomUUID(),
      rating: rating,
      review: review,
  })
    setRating(0);
    setReview("");
  };

  useEffect(() => {
    
      setRating(edit.feedback.rating );
      setReview(edit.feedback.review );
    
  }, [edit]);

  return (
    <form className='my-3' onSubmit={handleSubmit}>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className='form-select my-2 rounded-0'
      >
        <option value={0}>Rating</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        placeholder='Enter Your Review'
        className='form-control rounded-0'
      />
      <button type='submit' className='btn btn-success w-100'>
        Submit
      </button>
    </form>
  );
};

export default Maincontanier;
