import React,{components} from 'react';
import { useState,useEffect } from 'react';





import './App.css';

import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import AdContact from './components/AdContact';

 


function App() {

  const[contacts,setContacts]=useState([]);      //here we have passed an array initially

  const local_storage_key='contacts';


  const addContactHandler=(contact)=>{    //to pass object from child to parent we use handler(as props) here as vice and versa can be done using hooks 
    console.log(contact);
    setContacts([...contacts, contact]);       //we have used REST(The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript) and here we have retrieved all the states from contacts and transferred to contact
  }

  useEffect(()=>{
    localStorage.setItem(local_storage_key,JSON.stringify(contacts))

  },[contacts]);    //in the end [contacts] is the dependecy and here we have stored this in the local storage

    useEffect(() => {
     const retrieveContacts= JSON.parse(localStorage.getItem(local_storage_key));
     if(retrieveContacts) setContacts(retrieveContacts) 
    }, []);

  return (
  

<>
<div className='ui container'>
  <Header/>
  <AdContact addContactHandler={addContactHandler}/>
  <ContactList contacts={contacts}/>

</div>






</>


  );
}

export default App;
