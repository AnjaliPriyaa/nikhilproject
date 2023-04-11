import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
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
    <div className="container" style={{ display: 'inline-block'}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={Containerimage}
      title="container"
    />
    <CardContent>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 2 }} >
    <Grid item xs={2}>
    <h1  className='ak1'>Create on the go, right from a click. </h1>
    </Grid>
    <Grid item xs={2}>
    <TextField id="outlined-basic" label="Container Name" variant="outlined" placeholder='(Optional)' />
    </Grid>
   
    <Grid item xs={2}>
    <TextField id="outlined-basic" label="Image Name" variant="outlined" placeholder='Image Name(Required)' />
    </Grid>
    <Grid item xs={2}>
    
    <TextField id="outlined-basic" label="Tag Name" variant="outlined" placeholder='Tag Name(Optional)' />
    </Grid>
    <Grid item xs={2} >
      <Button variant="contained" onClick={event =>{this.createcontainer();}}>Create Container</Button>
    </Grid>
    <Grid item xs={2}>
    <p>{this.state.apiResponse}</p> 
    </Grid>
    </Grid>

   
    

       <input type="text" className='in1' id="name" placeholder='Container Name(Optional)'></input>
       <input type="text"  className='in1' id="image" placeholder='Image Name(Required)'></input>
       <input type="text" className='in1' id="tag" placeholder='Tag Name(Optional)'></input>
       
    </CardContent>
  </Card>
  </div>

    
  );
  
}

}
export default container;
