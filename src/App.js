import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/container';
import Image from './components/ImagePull';
import Details from './components/Details';
import Networks from './components/Network';
import BackgroundImage from './BackgroundImage.png';
import './App.css';
import { Avatar, Box, Button, Dialog, Grid, Link, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import Logo from './docker-logo.png';
// var text="</>";

var content;
class Compiler extends React.Component{
  constructor(props){
    super(props);
  }
  solve() {
    fetch("http://localhost:9000/cmd?"+document.getElementsByClassName('compilertext')[0].value)
    .then(res=>res.text())
    .then(res=>{
      alert(res.length)
      if(res.length==2){
        if(content==undefined)content="<div style='color:yellow'>-->"+document.getElementsByClassName('compilertext')[0].value+"<-- is not a valid command</div>";
        else content+=document.getElementsByClassName('compilertext')[0].value+"->not a valid command<-";
      }
      else{
      if(content==undefined)content="<div>-> <div style='display:inline-flex;'>"+JSON.parse(res)+"</div></div>";
      else content+="<div>-> <div style='display:inline-flex;'>"+JSON.parse(res)+"</div></div>";}
      document.getElementsByClassName('content')[0].innerHTML=content;
      document.getElementsByClassName('compilertext')[0].value="";
      // content.push(JSON.parse(res));
      // document.getElementsByClassName('content')[0].innerHTML=content;
      // document.getElementsByClassName('compilertext')[0].value="";
    })
    
  }
  render(){  
  return (
       <Dialog open={this.props.open} onClose={this.props.handleClose} 
       sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "70vw",  // Set your width here
          },
        },
      }}>
        <div style={{backgroundColor: 'black', width: '70vw', overflow: 'hidden'}}>
          <div className="contentbox"><pre className="content">{content}</pre></div>
          <input className="compilertext" style={{zIndex:'-1', height: '4vh',width:'100%'}} onKeyDown={(e)=>{if(e.keyCode == 13)this.solve();}} />
        </div>
       </Dialog> 
  );
  }
}
class App extends React.Component{
  
  valueapp=1;
  constructor(props){
    super(props);
    this.state={apis:1, page:0};//this.state={apiResponse:"",apiResponse1:""};
  }
  screen1(){
    document.getElementsByClassName('Aps')[0].style.display="Inline";
    document.getElementsByClassName('Apps')[0].style.display="none";
  }
  screen2(){
    document.getElementsByClassName('Apps')[0].style.display="Inline";
    document.getElementsByClassName('Aps')[0].style.display="none";
  }
  solve(){
    fetch("http://localhost:9000/cmd?"+document.getElementsByClassName('compilertext')[0].value)
    .then(res=>res.text())
    .then(res=>{
      alert(res.length)
      if(res.length==2){
        if(content==undefined)content="<div style='color:yellow'>-->"+document.getElementsByClassName('compilertext')[0].value+"<-- is not a valid command</div>";
        else content+=document.getElementsByClassName('compilertext')[0].value+"->not a valid command<-";
      }
      else{
      if(content==undefined)content="<div>-> <div style='display:inline-flex;'>"+JSON.parse(res)+"</div></div>";
      else content+="<div>-> <div style='display:inline-flex;'>"+JSON.parse(res)+"</div></div>";}
      document.getElementsByClassName('content')[0].innerHTML=content;
      document.getElementsByClassName('compilertext')[0].value="";
      // content.push(JSON.parse(res));
      // document.getElementsByClassName('content')[0].innerHTML=content;
      // document.getElementsByClassName('compilertext')[0].value="";
    })
    
  }
  componentWillMount(){
    
  }
  
render(){  
return (
 <Box>
    <Avatar src={Logo} sx={{ marginLeft: '20px',width: 70, height: 70, cursor: 'pointer', marginTop:'1vh' }} onClick={()=>{this.setState({page:0})}} />
    <div style={{position: 'absolute', display: 'flex', flexDirection: 'column' ,right: '3vw', bottom: '3vh'}}>
      <AddCircleIcon sx={{fontSize: 50, cursor: 'pointer'}} onClick={()=>{this.setState({page:1})}}/>
      <ArrowDropDownCircleIcon sx={{fontSize: 50, cursor: 'pointer'}} onClick={()=>{this.setState({page:2})}}/>
      <InfoIcon sx={{fontSize: 50, cursor: 'pointer'}} onClick={()=>{this.setState({page:3})}}/>
      <SearchIcon sx={{fontSize: 50, cursor: 'pointer'}} onClick={()=>{this.setState({page:4})}}/>
      <CodeIcon sx={{fontSize: 50, cursor: 'pointer'}} onClick={()=>{this.setState({page:4})}}/>
    </div>
    <Box sx={{height:"100%", position: 'absolute', top: 0, left: 0, width: '100%', zIndex: '-1'}}>
      <Networks/>
      <Container open={this.state.page === 1} handleClose={()=> this.setState({page:0})}/>
      <Image open={this.state.page === 2} handleClose={()=> this.setState({page:0})}/>
      <Details open={this.state.page === 3} handleClose={()=> this.setState({page:0})}/>
      <Compiler open={this.state.page === 4} handleClose={()=> this.setState({page:0})}/>
    </Box>
     <Navbar/>
  </Box>
  );


}

}
export default App;
