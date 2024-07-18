// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSuggestion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="suggestions-box-container">
            <div className="search-box-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  suggestionDetails={eachItem}
                  key={eachItem.id}
                  selectSuggestion={this.selectSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
