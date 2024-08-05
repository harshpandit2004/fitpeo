import React from "react";
import Avatar from "@mui/material/Avatar";
import "./feedbacks.css";
function Feedbacks() {
  const feedbacks = [
    {
      name: "Wade Warren",
      review: "⭐ ⭐ ⭐ ⭐",
      comment: "Great service!",
      avatar:
        "https://d.newsweek.com/en/full/1610730/cul-ps-kermit.jpg?w=1280&f=5fc16e63abb1093b42f12c6d1eb2c34e",
    },
    {
      name: "Jane Cooper",
      review: "⭐ ⭐ ⭐ ⭐ ⭐",
      comment: "Loved the experience!",
      avatar:
        "https://sesameworkshop.org/wp-content/uploads/2023/03/presskit_ss_bio_elmo.png",
    },
    {
      name: "Guy Hawkins",
      review: "⭐ ⭐ ⭐",
      comment: "Could be better.",
      avatar:
        "https://sesameworkshop.org/wp-content/uploads/2023/02/presskit_ss_bio_zoe-750x416.png",
    },
    // Add more feedback data as needed
  ];

  return (
    <div className="customer-feedback">
      <h2 className="recent-orders-header">Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-card">
          <div className="feedback-card-header">
            <Avatar
              src={feedback.avatar}
              sx={{ width: "2rem", height: "2rem" }}
            />
            <div className="feedback-text-wrapper">
              <h3 className="feedback-header-text">{feedback.name}</h3>
              <p className="feedback-header-text-review">{feedback.review}</p>
            </div>
          </div>
          <div className="feedback-card-body">
            <p>{feedback.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feedbacks;
