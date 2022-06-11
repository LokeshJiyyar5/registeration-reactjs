import React from 'react'
import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import database from './firebase';
const Edit = () => {
  let query=new URLSearchParams(useLocation().search);
  const[data,setData]=useState({
    firstname:"",lastname:"",email:"",
  })
  const {firstname,lastname,email}={...data}
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    useEffect(()=>{
      setData({...data,firstname:query.get('firstname'),lastname:query.get('lastname'),email:query.get('email')})
    },[])
    const submitHandler=e=>{
      e.preventDefault();
      database.ref(`register/${query.get('key')}`).set(data,err=>{
        if(err){
          console.log(err);
        }
        else{
          alert("data updated");
        }
      })
    }
  return (
    <div>
        <h2 style={{"textAlign":"center"}}>Edit Form</h2><br/>
        <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
        <label className="control-label col-sm-2" >First Name:</label>
        <div className="col-sm-4">
        <input type="text" value={firstname} className="form-control"  onChange={changeHandler} placeholder="First Name" name="firstname"></input><br/>
        </div></div>
        <div className="form-group">
        <label className="control-label col-sm-2">Last Name:</label>
        <div className="col-sm-4">
        <input type="text" value={lastname} className="form-control"  onChange={changeHandler} placeholder="Last Name" name="lastname"></input><br/>
        </div></div>
        <div className="form-group">
        <label className="control-label col-sm-2">Email:</label>
        <div className="col-sm-4">
        <input type="text" value={email} className="form-control"  onChange={changeHandler} placeholder=" Enter Email" name="email"></input><br/>
        </div></div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
        <input type="submit"  className='btn btn-success' value="save" />
        </div></div>
        </form>
    </div>
  )
}

export default Edit