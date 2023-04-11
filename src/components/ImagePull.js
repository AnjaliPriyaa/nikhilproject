import React from 'react';
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
    <div className="ImagePull">
       <h1 className='ak3'>PuLL Image </h1>
       <input type="text" className='in1' id="pullimage" placeholder='Image Name(Required)'></input>
       <input type="text" className='in1' id="pulltag" placeholder='Tag Name(Optional)'></input><br/>
       <button onClick={event =>{this.PullImage();}} >container create</button><br/>
       <p>{this.state.apiResponse}</p>
       
       </div>
    
  );
  
}

}
export default ImagePull;
