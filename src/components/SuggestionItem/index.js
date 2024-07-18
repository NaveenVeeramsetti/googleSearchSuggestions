// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, selectSuggestion} = props
  const {suggestion} = suggestionDetails

  const onSelectSuggestion = () => {
    selectSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p className="description">{suggestion}</p>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
          onClick={onSelectSuggestion}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
