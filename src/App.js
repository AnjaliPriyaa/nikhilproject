import React from 'react';
import Navbar from './components/Navbar'
import Container from './components/container'
import Image from './components/ImagePull'
import Details from './components/Details'
import Networks from './components/Network'
import './App.css';
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
    <div className="Apps">
     <Networks/>
     <Container/>
     <Image/>
     <Details/>
     <Navbar/>
     <img src={require('./logo.png')} className="title"/>
     <a href="https://drive.google.com/u/0/uc?id=1PQZ1r0aafUdte-pHxlbeSm7enwEETzxW&export=download" target="_blank" className='link'>Get Backend server</a>
      <button className="compiler" onClick={event =>{this.screen1();}}>{text}</button>
     </div>
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
