// import React from 'react';


// export default function AdContact() {
//   return (
    
    
        
//         <div className="ui main">
//             <h2>Add Contact</h2>
//           <form className="ui form">
//             <div className="field">
//               <label>Name</label>
//               <input type="text" name="name" placeholder="Name" />
//             </div>
//             <div className="field">
//               <label>Email</label>
//               <input type="text" name="email" placeholder="Email" />
//             </div>
//               <div>
//                 <button className='ui button blue'> click here</button>
//               </div>
//           </form>
//         </div>
      
    
//   );
// }



import React, { Component } from 'react';

export default class AdContact extends Component {
  state={
    name:"",
    email:"",
  };

 add=(e)=>{                   //here we do not use const because it can only be used in typescript
  e.preventDefault();         //because we are using a button and we dont want our page to refresh
  if(this.state.name==="" || this.state.email==="")
    {
      alert("all the fields are mandatory")
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""});        //we have used this to clear the entries after submit
    // console.log(this.state);

  };
  render() {
    return (
      <div>
        <div className="ui main">
          <h2>Add Contact</h2>

          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              {/*here we have passed a function in onchamge which will edit the value using setState and target the value inputted */}
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <button className='ui button blue'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

