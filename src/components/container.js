import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Containerimage from '../Containerimage.png';
class container extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};//this.state={apiResponse:"",apiResponse1:""};
  }
  createcontainer(){
    var name=document.getElementById('name').value;
    var image=document.getElementById('image').value;
    var tag=document.getElementById('tag').value;
    fetch(`http://localhost:9000/createContainers-${name}-${image}-${tag}`)
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\t/gi,' ').replace(/\"/gi,'').replace(/\\n/gi, '')}));//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  componentWillMount(){
    
  }
  
render(){
  return (
    <div className="container">
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={Containerimage}
      title="green iguana"
    />
    <CardContent>
    <h1  className='ak1'>Build on the go, right from a click. </h1>
       <input type="text" className='in1' id="name" placeholder='Container Name(Optional)'></input>
       <input type="text"  className='in1' id="image" placeholder='Image Name(Required)'></input>
       <input type="text" className='in1' id="tag" placeholder='Tag Name(Optional)'></input>
       
    </CardContent>
    <CardActions>
      <Button onClick={event =>{this.createcontainer();}}>Create Container</Button>
      <p>{this.state.apiResponse}</p> 
    </CardActions>
  </Card>
  </div>

    
  );
  
}

}
export default container;
