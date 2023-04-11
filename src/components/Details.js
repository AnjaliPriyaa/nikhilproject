import React from 'react';
import './Details.css';
class Details extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};//this.state={apiResponse:"",apiResponse1:""};
  }
  PullImage(){
    var image=document.getElementById('detailimage').value;
    var tag=document.getElementById('detailtag').value;
    fetch(`http://localhost:9000/DetailsImg-${image}-${tag}`)
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res.replace(/\\t/gi,' ').replace(/\"/gi,'').replace(/\\n/gi, " ")}));//.then(res=>this.setState({apiResponse1:res.replace(/\\t/gi, '   ')}));
  }
  componentWillMount(){
    
  }
  
render(){
  return (
    <div className="Details">
       <h1 className='ak2'>Image Details</h1>
       <input type="text" className='in1' id="detailimage" placeholder='Image Name(Required)'></input>
       <input type="text" id="detailtag" className='in1' placeholder='Tag Name(Optional)'></input><br/>
       <button onClick={event =>{this.PullImage();}} >container create</button><br/>
       {this.state.apiResponse}
       
       </div>
    
  );
  
}

}
export default Details;
