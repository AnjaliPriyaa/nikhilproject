import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


class ImagePull extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};//this.state={apiResponse:"",apiResponse1:""};
  }
  PullImage(){
    var image=document.getElementById('pullimage').value;
    var tag=document.getElementById('pulltag').value;
    fetch(`http://localhost:9000/PullImg-${image}-${tag}`)
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\t/gi,' ').replace(/\"/gi,'').replace(/\\n/gi, '')}));//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  componentWillMount(){
    
  }
  
render(){
  return (
    <div className="ImagePull" style={{ display: 'inline-block'}}>
    <Card sx={{ maxWidth: 345}}>
    <CardContent>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 2 }} >
    <Grid item xs={2}>
    <h1 className='ak3'>PuLL Image </h1>
    </Grid>
    <Grid item xs={2}>
    <TextField id="outlined-basic" label="Image Name" variant="outlined" placeholder='Image Name(Required)' />
    </Grid>
    <Grid item xs={2}>
    
    <TextField id="outlined-basic" label="Tag Name" variant="outlined" placeholder='Tag Name(Optional)' />
    </Grid>
    <Grid item xs={2} >
      <Button variant="contained"onClick={event =>{this.PullImage();}} >Submit To Pull Image</Button>
    </Grid>
    <Grid item xs={2}>
    <p>{this.state.apiResponse}</p> 
    </Grid>
    </Grid>
   
    <input type="text" className='in1' id="pullimage" placeholder='Image Name(Required)'></input>
       <input type="text" className='in1' id="pulltag" placeholder='Tag Name(Optional)'></input><br/>

    </CardContent>

 
    </Card>
  </div>
       
    
  );
  
}

}
export default ImagePull;
