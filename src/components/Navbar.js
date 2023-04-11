import React from 'react';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};//this.state={apiResponse:"",apiResponse1:""};
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
     .catch((error) => {
      this.setState({apiResponse:"Backend server not working"});
  });
  }
  callVersion(){
    fetch("http://localhost:9000/version")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\n/gi,"").replace(/\"/gi,"")}))
    .catch((error) => {
      this.setState({apiResponse:"Docker not installed"});
  });
  }
  volumels(){
    fetch("http://localhost:9000/volume-ls")
    .then(res=>res.text())
    .then(res=>{
      this.state.apiResponse=JSON.parse(res).split("\\n")
    var table=[];
     for(let i=0;i<this.state.apiResponse.length;i++){
       table.push(this.state.apiResponse[i])
       table.push(<br/>)
     }
     this.setState({apiResponse:<pre className='present'>{table}</pre>})
  });
  }
  containerls(){
    fetch("http://localhost:9000/container-ls")
    .then(res=>res.text())
    .then(res=>{
      this.state.apiResponse=JSON.parse(res).split("\\n")
    var table=[];
     for(let i=0;i<this.state.apiResponse.length;i++){
       table.push(this.state.apiResponse[i])
       table.push(<br/>)
     }
     this.setState({apiResponse:<pre className='present'>{table}</pre>})
  });//lis=<b>CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMESss</b>;});
    
  }
  imagels(){
    fetch("http://localhost:9000/image-ls")
    .then(res=>res.text())
    .then(res=>{
      this.state.apiResponse=JSON.parse(res).split("\\n")
    var table=[];
     for(let i=0;i<this.state.apiResponse.length;i++){
       table.push(this.state.apiResponse[i])
       table.push(<br/>)
     }
     this.setState({apiResponse:<pre className='present'>{table}</pre>})
  });
  }
  componentWillMount(){
    this.callAPI();
  }
  
render(){
  return (
    <div className="Navbar">
      <br/>
       {this.state.apiResponse}<br/>
       {/* <br/><br/><br/><br/><br/><br/><br/><br/> break  */}
       <div className="buttons">
       <button onClick={event =>{this.callAPI();}} >callAPI</button>
       <button onClick={event =>{this.callVersion();}} >version</button>
       <button onClick={event =>{this.containerls();}} >containerls</button>
       <button onClick={event =>{this.volumels();}} >volumels</button>
       <button onClick={event =>{this.imagels();}} >imagels</button>
       <button onClick={event =>{this.setState({apiResponse:"click"})}} >version</button>
       </div>
       </div>
    
  );
  
}

}
export default Navbar;
