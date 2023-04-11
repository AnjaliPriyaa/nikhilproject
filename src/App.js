import React from 'react';
import Navbar from './components/Navbar'
import Container from './components/container'
import Image from './components/ImagePull'
import Details from './components/Details'
import Networks from './components/Network'
import './App.css';
import { Avatar, Button, Grid, Link, Paper, Typography } from '@mui/material';
import { width } from '@mui/system';
import Logo from './logo.png';
var text="</>";

var content;
class App extends React.Component{
  
  valueapp=1;
  constructor(props){
    super(props);
    this.state={apis:1};//this.state={apiResponse:"",apiResponse1:""};
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
        <Grid container spacing={2} sx={{paddingTop: '10px'}}>
          <Grid item xs={2}>
            <Avatar src={Logo} sx={{ marginLeft: '20px',width: 70, height: 70 }} />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Network</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Container</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Pull Image</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Image Details</Button>
          </Grid>
          <Grid item xs={2}>
          <Typography> <Link href="https://drive.google.com/u/0/uc?id=1PQZ1r0aafUdte-pHxlbeSm7enwEETzxW&export=download">Download Backend</Link> </Typography>
          </Grid>
        </Grid>
      </Paper>
    <Paper>
     <Networks/>
     <Container/>
     <Image/>
     <Details/>
     <Navbar/>
     </Paper>
      <button className="compiler" onClick={event =>{this.screen1();}}>{text}</button>
     <div className="Aps">
      <div className="contentbox"><pre className="content">{content}</pre></div>
      <button className="compiler" onClick={event =>{this.screen2();}}>x</button>
      <input className="compilertext" rows="1" onKeyDown={(e)=>{if(e.keyCode == 13)this.solve();}}></input>
       </div>
       </div>
  );


}

}
export default App;
