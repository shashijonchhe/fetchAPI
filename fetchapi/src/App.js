import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray:[]
}
}


componentDidMount=()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>this.setState({
    userArray:data
  }))
}

render(){
  let userArray=this.state.userArray
  return(
    <div>
      <ul>
          {userArray.map((user)=>
            <li>
              {user.name} {user.username}
            </li>
            )}
      </ul>
    </div>
  )
}

}


export default App;
