import React from "react";

// class based component becasue we're using state
class SearchBar extends React.Component {
  // react to the user typing (uncontrolled)
  // onInputChange(event){
  //     console.log(event.target.value)
  // }

  /* react to the user typing (controlled) using the sate.
    Doing it this way means that we can keep track of the input value at all times, instead of only when the user is typing.
    We want to store data inside the react component, not in the html dom*/
  state = { term: "" };

  // arrow fn this will be equal to the searchbar this
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    // gives an error -> state is undefined
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            {/* if I did this.onInputChange(), then it would be called each on render time*/}
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
