import { Typography } from '@mui/material';
import React from 'react';
var container;
var cn;
var sources;
class Network extends React.Component{
  val=1;
  text=-1;
  constructor(props){
    super(props);
    this.state={apiResponse:[]};
  }
 
  Network(){
    fetch(`http://localhost:9000/Network`)
    .then(res=>res.text())
    .then(res=>{this.setState({apiResponse:JSON.parse(res)});this.val=2});//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  // Neetwork(){
  //   fetch(`http://localhost:9000/Network-F A L S E`)
  //   .then(res=>res.text())
  //   .then(res=>{this.setState({apiResponse:JSON.parse(res)});this.val=3;});//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  // }
  Neet=(event, source) =>{
    fetch(`http://localhost:9000/Network-${this.state.apiResponse[source]}`)
    .then(res=>res.text())
    .then(res=>{this.setState({apiResponse:JSON.parse(res)});
    sources=source;
    container=JSON.parse(JSON.parse(res))[0];
    cn=container["Name"];
    container=container["Containers"];
    var count=[];
    for (let key in container)count.push(container[key]["Name"]);
    container=count;
    
    this.val=3;});//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  soln(){
    fetch(`http://localhost:9000/Network-${cn}`)
    .then(res=>res.text())
    .then(res=>{this.setState({apiResponse:JSON.parse(res)});
    container=JSON.parse(JSON.parse(res))[0]["Containers"];
    var count=[];
    for (let key in container)count.push(container[key]["Name"]);
    container=count;
    this.val=3;});
    document.getElementsByClassName('Nbody2')[0].style.display="none";
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(0,0,740,569);
    ctx.beginPath();
    ctx.arc(390, 284, 50, 0, 2 * Math.PI);
    ctx.font = "15px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0"," magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fillText(cn,341,290);
    var x=container.length,i=0;
    var angle=360/x;
    for(i=0;i<x;i++)
    {
    ctx.moveTo(390+50*Math.cos(i*angle*3.14/180),284-50*Math.sin(i*angle*3.14/180));
    ctx.lineTo(390+160*Math.cos(i*angle*3.14/180),284-160*Math.sin(i*angle*3.14/180));

    }
    ctx.stroke();
    for(i=0;i<x;i++)
    {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.font = "10px Verdana";
    ctx.fillText(container[i],352+200*Math.cos(i*angle*3.14/180),284-200*Math.sin(i*angle*3.14/180));
    ctx.arc(390+200*Math.cos(i*angle*3.14/180), 284-200*Math.sin(i*angle*3.14/180), 40, 0, 2 * Math.PI);
    ctx.stroke();
    }
    document.getElementsByClassName('Nbody3')[0].style.display="inline-block";
  }
  solv(){
    fetch(`http://localhost:9000/Network-${cn}`)
    .then(res=>res.text())
    .then(res=>{this.setState({apiResponse:JSON.parse(res)});
    container=JSON.parse(JSON.parse(res))[0]["Containers"];
    var count=[];
    for (let key in container)count.push(container[key]["Name"]);
    container=count;
    this.val=3;});
    document.getElementsByClassName('Nbody2')[0].style.display="inline-block";
    document.getElementsByClassName('Nbody3')[0].style.display="none";
  }
  componentWillMount(){
    
  }
  
  
render(){
    

    if(this.val===1)return (
        <div style={{height:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
       <div className="Nbody1">
       
       <Typography sx={{border: '2px solid black', borderRadius: '20vh', height:70, width: 70, cursor: 'pointer',padding:8, fontSize:'1.2rem'}} onClick={event =>{this.Network();}}>Search Network</Typography>
       </div></div>
  );
 else if(this.val===2){
var lis = [];
for (let i=0;i<this.state.apiResponse.length-1; ++i) {
    lis.push(<button  className='circles' onClick={event =>{this.Neet(event,i);}}>{this.state.apiResponse[i]}</button>);
}
    return (
    <div className="Network">
   <div className="Nbody2">
   {lis}
   </div></div>

);
  
}
else if(this.val===3){
    return (
      <div className="Network">
   
   
    <pre className="Nbody2"><button className='chngbutton'  onClick={event =>{this.soln();}}>getnames</button>{this.state.apiResponse}</pre>
    <pre className="Nbody3"><button className='chngbutton'  onClick={event =>{this.solv();}}>getnames</button><canvas id="myCanvas" width="740" height="569">.</canvas>
    </pre>
   </div>
    );
}
}

}
export default Network;
