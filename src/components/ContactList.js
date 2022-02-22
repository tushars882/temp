import React from "react";
import ContactCard from "./ContactCard";



const ContactList=(props)=>{
console.log(props);

const deletContactHandler=(id)=>{
  props.getContactId(id);         //in appjs we have passe dcontactId as a property and this is gonna get id from deletcontacthandler which has been passed to clickhandler which goes to contactid
}

const renderContactList=props.contacts.map((contact) =>{
  return <ContactCard contact={contact} clickHandler={deletContactHandler} key={contact.id} />;
})

  return(

    <div className="ui celled list">{renderContactList}</div>
  )
}
export default  ContactList;


