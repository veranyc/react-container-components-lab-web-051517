import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'da62fa0d621f4ed8a16aaa0aa400b9de';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// fetch a list of the most recent reviews and display them.

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

componentWillMount() {
  fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results}))
  }

  render(){
  //  console.log(this.state.reviews)
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


export default LatestMovieReviewsContainer

// Criteria:
// <LatestMovieReviewsContainer />
//     1) should have state
//     2) should have a state property "reviews"
//     3) should have top-level element with class "latest-movie-reviews"
//     4) should render reviews after reviews state updated
