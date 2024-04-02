import React, { useEffect } from 'react'
import './userList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTeam, removeUser } from '../redux/team'
import axios from 'axios'

const UserTeamList = () => {
    const team = useSelector(state => state.team)
    const dispatch = useDispatch()



const removeItem = (id) => {

dispatch(removeUser(id))
}


  const sendTeam = async() => {

    try{

      const members = [...team?.teams] 
      
      const res = await axios.post('https://heliserver.onrender.com/api/team/add' , {members : members })
     
      if(res.status === 200){
        
        window.location.reload()
      }else{
        alert('Error Adding Team!')
      }

    }catch(err){
      console.log(err)
    }
}

  

  return (
    <div className='userList'>
        <div className='userListHeader'>

        <h2>Team List</h2>
        </div>
      
      <div className='userTeam'>

      {
          team?.teams.map(items => (
              <div className='usersCart'>
             <span onClick={() => removeItem(items?._id)}>X</span>
            <img src={items?.avatar} alt="" />
            <h2>{`${items?.first_name} ${items?.last_name}`}</h2>
            <h2>{`${items?.gender}`}</h2>
            <h2>{`${items?.domain}`}</h2>
           </div>
        ))
    }
    </div>

    <button className='btn' onClick={() => sendTeam()}>Confirm Team</button>
    </div>
  )
}

export default UserTeamList
