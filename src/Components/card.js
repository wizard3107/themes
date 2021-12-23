import React, { Component } from 'react'
class Card1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        title : this.props.title,
        img : this.props.img,
        des : this.props.description,
        styleC : this.props.styleCard,
        styleB : this.props.styleBody,
        styleT : this.props.styleTheme, 
        styleS : this.props.StyleSomew,
        opt : this.props.optn,
        styleP : this.props.stylePara,
        styleL : this.props.styleLabel
      }
    }
    getInitialState = () =>{
      return {selectValue:'Select theme'};
    }
      handleChange = (e) =>{
      this.setState({selectValue:e.target.value});
      if(e.target.value==='rb')
        {
            this.setState({
                title:"Red and blue",
                img:"imgwb.png",
                des:"this is red and blue theme",
                styleL:{
                  color:'rgb(0,0,0)'
                },
                styleC:{
                  backgroundColor:'rgb(43, 44, 49)',
                    border: '2px, solid',
                    borderColor: 'red',
                    borderRadius: '4px',
                    marginLeft:'20px',
                    marginRight: '20px'
                },
                styleB:{
                  
                    border: '2px, solid',
                    borderColor: 'black',
                    borderRadius: '4px',
                    padding : '10px',
                    marginLeft: '20px',
                    marginRight: '20px'
                 
                },
                styleT:{
                  
                    color :'rgb(0, 0, 0)',
                    backgroundColor: 'red',
                    fontFamily: "san-serif",
                    boxSizing: 'border-box',
                    borderRadius: '1em',
                    textAlign: 'center'
                  
                },
                styleS: {
                
                    border: '1px,solid',
                    borderRadius: '1px',
                    borderColor: 'blue',
                    backgroundColor: 'black',
                    color:'red',
                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                    padding: '5px',
                    margin: '5px',
                    marginLeft:'20px'   
                  },
                  styleP:{
                    color:"black"
                  }
                
            })

        }
        else if (e.target.value ==='bw'){
            this.setState({
                title:"Black and white",
                img:"logo192.png",
                des:"this is black and white theme",
                styleL:{
                  color:'rgb(255,255,255)'
                },
                styleC:{
                  backgroundColor:'grey',
                  marginLeft:'20px',
                  marginRight: '20px'
              },
              styleB:{
                
                  border: '2px, solid',
                  borderColor: 'black',
                  borderRadius: '4px',
                  padding : '10px',
                  marginLeft: '20px',
                  marginRight: '20px'
               
              },
              styleT:{
                
                  color :'rgb(0, 0, 0)',
                  backgroundColor: 'rgb(255,255,255)',
                  fontFamily: "san-serif",
                  boxSizing: 'border-box',
                  borderRadius: '1em',
                  textAlign: 'center'
                
              },
              styleS: {
              
                  border: '1px,solid',
                  borderRadius: '1px',
                  borderColor: 'white',
                  backgroundColor: 'black',
                  color:'white',
                  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  padding: '5px',
                  margin: '5px',
                  marginLeft:'20px'   
                },
                styleP:{
                  color:"black"
                }
            })
        }
        else if(e.target.value ==='wa'){
            this.setState({
                title:"White and aqua",
                img:"imgbw.png",
                des:"this is a white and aqua theme",
                styleL:{
                  color:'rgb(255,255,255)'
                },
                styleC:{
                  backgroundColor:'aqua',
                  border: '2px,solid',
                  borderColor: 'rgb(202, 55, 55)',
                  borderRadius: '4px',
                  marginLeft:'20px',
                  marginRight: '20px'
              },
              styleB:{
                
                  border: '2px,solid',
                  borderColor: 'white',
                  borderRadius: '4px',
                  padding : '10px',
                  marginLeft: '20px',
                  marginRight: '20px'
               
              },
              styleT:{
                
                  color :'white',
                  backgroundColor: 'aqua',
                  fontFamily: "san-serif",
                  boxSizing: 'border-box',
                  borderRadius: '1em',
                  textAlign: 'center'
                
              },
              styleS: {
              
                  border: '1px,solid',
                  borderRadius: '1px',
                  borderColor: 'white',
                  backgroundColor: 'aqua',
                  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  padding: '5px',
                  margin: '5px',
                  marginLeft:'20px'   
                },
                styleP:{
                  color:"black"
                }
            })
        }
    }
     
    
    
render() {
    return (
      <div className='Card' style={this.state.styleC} >
<div id='menu'>
<label style={this.state.styleL}>Select themes </label>

<select 
        value={this.state.selectValue} 
        onChange={this.handleChange} 
       id='themes' className='themes' style={this.state.styleT} >
<option value="none" selected disabled hidden>Select Theme</option>
<option value="rb" className='optn' style={this.state.opt}>red and blue</option>
<option value="bw" className='optn' style={this.state.opt}>black and white</option>
<option value="wa" className='optn' style={this.state.opt}>white and aqua</option>
</select>
</div>
        <div className='Card Body' id= "body" style={this.state.styleB}>
       <img src= {this.state.img} alt ="imae" id="image"/>
        <h2>{this.state.title}</h2>
        <p className='card description' style={this.state.styleP}>{this.state.des}</p>
        </div>
    <button className="card Button" id="somew" style={this.state.styleS}>Go somewhere</button>
  </div>
    )
  }
}
export default Card1
