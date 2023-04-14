import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Dialog } from '@mui/material';


class ImagePull extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:"", data:{image:null, tag:null}};//this.state={apiResponse:"",apiResponse1:""};
  }
  PullImage(){
    fetch(`http://localhost:9000/PullImg-${this.state.data.image}-${this.state.data.tag}`)
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\t/gi,' ').replace(/\"/gi,'').replace(/\\n/gi, '')}));//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  componentWillMount(){
    
  }
  
render(){
  return (
    <Dialog onClose={this.props.handleClose} open={this.props.open}>
    <Card sx={{ maxWidth: 345}}>
    <CardContent>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 2 }} >
    <Grid item xs={2}>
    <h1> Pull Image </h1>
    </Grid>
    <Grid item xs={2}>
    <TextField id="outlined-basic" label="Image Name" variant="outlined" 
      placeholder='Image Name(Required)'  onChange={(event)=>this.setState({data:{...this.state.data, image:event.target.value}})}/>
    </Grid>
    <Grid item xs={2}>
    
    <TextField id="outlined-basic" label="Tag Name" variant="outlined" 
      placeholder='Tag Name(Optional)'  onChange={(event)=>this.setState({data:{...this.state.data, tag:event.target.value}})}/>
    </Grid>
    <Grid item xs={2} >
      <Button variant="contained"onClick={event =>{this.PullImage();}} >Submit To Pull Image</Button>
    </Grid>
    <Grid item xs={2}>
    <p>{this.state.apiResponse}</p> 
    </Grid>
    </Grid>
    </CardContent>

 
    </Card>
  </Dialog>
       
    
  );
  
}

}
export default ImagePull;
