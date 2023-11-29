import { uploadPhoto, createUser } from './utils'
export default function handleProfileSignup() {
  uploadPhoto().then((data_1)=>{
    createUser().then((data_2)=>{
      console.log(data_1.body, data_2.firstName, data_2.lastName);
    })
  }).catch(() => console.log("Signup system offline")
}

