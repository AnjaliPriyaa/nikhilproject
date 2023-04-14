import { Typography } from '@mui/material';
import React from 'react';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={api:'', version:'', volumes: '', containers: '',images: '', anchorEl:null};
  }
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
     .catch((error) => {
      this.setState({api:"Backend server not working"});
  });
  }
  callVersion(){
    fetch("http://localhost:9000/version")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\n/gi,"").replace(/\"/gi,"")}))
    .catch((error) => {
      this.setState({version:"Docker not installed"});
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
     this.setState({volumes:table})
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
     this.setState({containers:table})
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
     this.setState({images:table})
  });
  }
  componentWillMount(){
    this.callAPI();
    this.callVersion()
    this.containerls()
    this.volumels()
    this.imagels()
  }

  
render(){
  return (
    <div style={{position: 'absolute', bottom: 0, paddingLeft: 20, paddingBottom: 20 ,display: 'flex', alignItems: 'flex-start'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography>callAPI</Typography>
          <Typography>version</Typography>
          <Typography>containers &nbsp; &nbsp; &nbsp; {this.state.containers}</Typography>
          <Typography>volumes</Typography>
          <Typography>images</Typography>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography>{this.state.api}</Typography>
          <Typography>{this.state.version}</Typography>
          <Typography>{this.state.containers}</Typography>
          <Typography>{this.state.volumes}</Typography>
          <Typography>{this.state.images}</Typography>
          </div>
       </div>
    
  );
  
}

}
export default Navbar;
