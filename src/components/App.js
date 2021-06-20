import React from "react";
import ImageList from "./ImageList"
import SearchBar from "./SearchBar";
import "./App.scss";
import unsplash from '../api/unsplash'

// class based component
class App extends React.Component {
  // state will contain images
  state = {images: []}

  // async infront allows the async await syntax  
  onSearchSubmit = async (term) =>{
    // make a request to unsplash
    const response = await unsplash.get(`/search/photos`,{
      params: {query: term}
    })
    const results = response.data.results
    this.setState({images: results})
  }

  render() {
    return (
      <div className="ui container">
        {/* passing a method into SearchBar as a prop */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
