import React from 'react';
import {useEffect,useState} from 'react';
import {userCollectionRef} from './App';
import {addDoc} from 'firebase/firestore';

function CreateUser({refetchUsers}){
 const [name,setName] =useState('');
  const [age,setAge] =useState(0);

  const handleChange =(e) => {
  console.log(e.target.name);
  if (e.target.name === 'name'){
  setName(e.target.value);
}
  else {
  setAge(Number(e.target.value));
  }
  };
  const handleSubmit = async () => {
  const data = await addDoc(userCollectionRef,{name,age});
  setName('');
  setAge(0);

  //refetchUsers();
  console.log(data);
  }


return(

       <div>
       <h1 style={{color: "black"}}> CRUD operations with React JS using FireBase</h1>



             <div className="mb-3">
             <label htmlFor="name_" className="form-label">Name</label>
             <input name="name" type="text" className="form-control" id="name_" aria-describedby="emailHelp" onChange={handleChange} />
             </div>
              <div className="mb-3">
             <label htmlFor="age" className="form-label">Age</label>
             <input name="age" type="number" className="form-control" id="age" onChange={handleChange} />
           <br/>
           </div>
           <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
         </div>

)

}
export default CreateUser;