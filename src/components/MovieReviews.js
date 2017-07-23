// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review) => <div className="review">{review.display_title}</div>)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
// Criteria:
// <MovieReviews />
//     5) should be a stateless functional component
//     6) should have defaultProp "reviews"
//     7) should have a top-level component with class "review-list"
//     8) should render all the reviews
