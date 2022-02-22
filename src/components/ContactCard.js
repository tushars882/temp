import React  from 'react';
import download from "./download.png";


const ContactCard=(props)=>{

  const{id,name,email}=props.contact;         //here we have used destructuring so that we donot need to write props.contact.name instead we can only write name,email 
  return (
    <div className="item">
      <img className="ui avatar image" src="download.png" alt="no" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className='trash alternate outline icon' style={{color:"red" , marginTop:"10px"}}></i>
      <div>
        
      </div>
    </div>
  );
}
export default ContactCard;
