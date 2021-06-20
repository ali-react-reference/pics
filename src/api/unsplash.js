import axios from 'axios'

// create an instance of the axios client with some default properties
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: 'Client-ID pdSeZWuWVuLArRNTh-D1hO9gj7zB1q1KJzx1YpKS9W4'
  }
})