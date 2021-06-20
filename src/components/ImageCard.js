import React from 'react'

class ImageCard extends React.Component{
  
  // get the image height
  constructor(props){
    super(props);
    this.state = {spans:20}
    this.imageRef = React.createRef()
  }

  // use componentDidMount (when content is displayed) to listen for image is loaded event
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  // set the grid row end based on the image height  
  setSpans = ()=>{
    const height = this.imageRef.current.clientHeight
    this.setState({spans:Math.ceil(height/10+1)})
  }


  render(){
    const {alt_description, urls} = this.props.image

    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
      {/* give image a prop called ref, allowing us to get info about the image */}
        <img src={urls.regular} alt={alt_description} ref={this.imageRef}/>
      </div>
    )
  }
}

export default ImageCard