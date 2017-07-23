// provide a searchable interface allowing the user to enter a search term
 // and then receive a list of reviews that match the search term(s)

import React from 'react'
import MovieReviews from './MovieReviews'

 const NYT_API_KEY = 'da62fa0d621f4ed8a16aaa0aa400b9de';
 const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>?'
             + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentWillMount(){
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    })
    )
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer


// Criteria:
// <SearchableMovieReviewsContainer />
//     9) "before each" hook for "should have state"
