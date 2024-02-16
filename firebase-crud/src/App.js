import { collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import CreateUser from './CreateUser';
export const userCollectionRef = collection(db, 'users');

function App() {

const [users,setUsers] = useState([]);
//const getUsers = async () => {
//const data = await getDocs(userCollectionRef);
//console.log(data);
//setUsers(data.docs.map(doc => ({
//...doc.data(),
//id: doc.id
//})));

//};

useEffect(() => {
//getUsers();
//const queryResponse = query(userCollectionRef,/*limit(4),orderBy('age','desc')*/ where('age','>',20)); //
//const snapshot = onSnapshot(queryResponse,(snapShotParam) =>{
const snapshot = onSnapshot(userCollectionRef,(snapShotParam) =>{
setUsers(snapShotParam.docs.map(doc => ({
...doc.data(),
id: doc.id
})));
})

return () => snapshot();

},[]);
console.log(users); //

const updateAge = async(userid,updatedAge) => {
const userDoc = doc(db,'users',userid);
const newAge ={age: updatedAge};
await updateDoc(userDoc,newAge);
 };

const deleteUser = async(userid) =>{
const userDoc = doc(db,'users',userid);
await deleteDoc (userDoc);
};

  return (
    <div className="App">
       <CreateUser />

    <ul>
     { users.map( user => {
return(<>
<li className='my-3'   key = {user.id}> Name is { user.name } and Age is {user.age}

<button onClick={() => updateAge(user.id,user.age +1)} className="btn btn-xs btn-success ms-2"> <i className="bi bi-cloud-plus"></i>  </button>
<button onClick={() => updateAge(user.id,user.age -1)} className="btn btn-xs btn-primary ms-2"> <i className="bi bi-cloud-minus"></i> </button>

<button onClick={() => deleteUser(user.id)} className="btn btn-xs btn-danger ms-2"> <i class="bi bi-trash3-fill"></i> </button>

</li>

 </>)

 })
}
 </ul>
</div>
 );
 }

export default App;