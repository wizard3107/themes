import React, { Component } from 'react'
import Card1 from './Components/card'
//import PostForm from './Components/PostForm'
//import Postlist from './Components/Postlist'
class App extends Component {
  render() {
    return (
      <div className='App'>
        
      
      <Card1 img ="logo512.png" title= "Theme" description = "this is a sample example of theme" styleCard={
        {
          border: '2px, solid',
          borderColor: 'rgb(202, 55, 55)',
          borderRadius: '4px',
          marginLeft:'20px',
          marginRight: '20px'
       }
      } styleBody={
        {
          border: '2px, solid',
          borderColor: 'black',
          borderRadius: '4px',
          padding : '10px',
          marginLeft: '20px',
          marginRight: '20px'
       }
      } styleThemes={
        {
          color :'rgb(0, 0, 0)',
          backgroundColor: 'rgb(35, 66, 204)',
          fontFamily: "san-serif",
          boxSizing: 'border-box',
          borderRadius: '1em',
          textAlign: 'center'
        }
      } StyleSomew = {
        {
          border: '1px,solid',
          borderRadius: '1px',
          borderColor: 'blue',
          backgroundColor: 'aqua',
          fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          padding: '5px',
          margin: '5px',
          marginLeft:'20px'   
        }
      }
      stylePara={
        {
          color:'black',
          fontFamily:"Haettenschweiler, 'Arial Narrow Bold', sans-serif"
        }
      }
      styleLable={
        {
          color:'black'
        }
      }
      optn={
        {
          backgroundColor: 'aliceblue'
      }
    }
       />
        {/* <Postlist/> */}
      </div>
    )
  }
}

export default App
