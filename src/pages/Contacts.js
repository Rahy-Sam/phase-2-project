import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          rating,
        }),
      });

      if (response.ok) {
        alert(`Thanks for Your Feedback, ${name}! You rated the user experience as ${rating} stars.`);
      } else {
        console.error('Failed to submit feedback');
        alert('An error occured, please try again later.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occured, please try again later.');
    }
  };

  return (
    <div>
      <div className="feedback">
        <h2>Talk to Us</h2>
        <p>
          Talk to us personally and personalize your suggestions straight to us;
        </p>
        <p>Phone number: +254798357848</p>
        <a href="mailto:mzaquir58@gmail.com">Scrum leader: Zaquir Maina </a> <br />
      </div>
      <form className="ContactForm" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Rate Your Experience:
          <Rating
            icon="star"
            rating={rating}
            maxRating={5}
            onRate={(e, { rating }) => setRating(rating)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
