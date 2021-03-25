import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state={image:[]};
  OnsearchSubmit=async term=> {
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
  Authorization:'Client-ID QhhXz1ouyTDrsGQbSDZ5K-ZTIjx3R9U5hSdpVeBLReI'
      }
    })
this.setState({image:response.data.results})
  }
  render() {
    return (
      <div className=" ui container" style={{ marginTop: "10px" }}>
        <SearchBar runMe={this.OnsearchSubmit} />
      <ImageList images={this.state.image}/>
      </div>
    );
  }
}
export default App;
