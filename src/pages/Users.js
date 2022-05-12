import React, { Component } from 'react';

class Users extends Component {

constructor(props){
  super(props);
  this.state = {
    userItems: []
  }
}

componentDidMount() {
  fetch("https://api.mixcloud.com/spartacus")
  .then(res => res.json())
  .then(json => {
    this.setState({
      userItems: json
    })
  });
}
  
render() {
    return (
      <div className="Users">

      <table>

        <thead>   
          <tr>
          <th>Name:</th>
          </tr>  
        </thead>

        <tbody>
          {
            this.state.userItems.map(user => (
              <tr key={user.name}>
                <td> {user.name} </td>
                </tr>
            ))
          }
        </tbody>

      </table>
     </div>
    );
   }
  }

export default Users;
