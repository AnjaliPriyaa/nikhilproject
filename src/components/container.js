import React from 'react';
import './container.css';
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
       <h1  className='ak1'>Create Container </h1>
       <input type="text" className='in1' id="name" placeholder='Container Name(Optional)'></input>
       <input type="text"  className='in1' id="image" placeholder='Image Name(Required)'></input>
       <input type="text" className='in1' id="tag" placeholder='Tag Name(Optional)'></input>
       <button className='in1' onClick={event =>{this.createcontainer();}} >container create</button><br/>
       <p>{this.state.apiResponse}</p>
       
       </div>
    
  );
  
}

}
export default container;
