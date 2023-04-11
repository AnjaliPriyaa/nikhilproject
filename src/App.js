import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Container from './components/container'
import Image from './components/ImagePull'
import Details from './components/Details'
import Networks from './components/Network'
import './App.css';
import { Avatar, Button, Grid, Link, Paper, Typography } from '@mui/material';
import Logo from './logo.png';
var text="</>";

var content;
const Compiler = (props) =>{
  const {page, setPage} = props;
  return (
    <div>
       <Paper sx={{backgroundColor: 'black',height: '700px'}}>
        <div className="contentbox"><pre className="content">{content}</pre></div>
        <input className="compilertext" rows="1" onKeyDown={(e)=>{if(e.keyCode == 13)this.solve();}}></input>
       </Paper> 
       }
    </div>
  );
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
    <div className="App">
      <Paper sx={{height: '10vh', width: '100%'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 14 }} sx={{paddingTop: '10px'}}>
          <Grid item xs={2}>
            <Avatar src={Logo} sx={{ marginLeft: '20px',width: 70, height: 70 }} />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=>{this.setState({page:0})}} >Network</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=>{this.setState({page:1})}} >Container</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=>{this.setState({page:2})}} >Pull Image</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=>{this.setState({page:3})}} >Image Details</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=>{this.setState({page:4})}} >Open Cli</Button>
          </Grid>
          <Grid item xs={2}>
          <Typography> <Link href="https://drive.google.com/u/0/uc?id=1PQZ1r0aafUdte-pHxlbeSm7enwEETzxW&export=download">Download Backend</Link> </Typography>
          </Grid>
        </Grid>
      </Paper>
    <Paper>
     {this.state.page === 0 && <Networks/>}
     {this.state.page === 1 && <Container/> }
     {this.state.page === 2 && <Image/> }
     {this.state.page === 3 && <Details/> }
     {this.state.page ===4 && <Compiler /> }
     </Paper>
     <Navbar/>
      </div>
  );


}

}
export default App;
