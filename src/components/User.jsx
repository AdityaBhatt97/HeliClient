import React from 'react'
import '../pages/home.css'
import { addTeam } from '../redux/team'
import { useDispatch, useSelector } from 'react-redux'

const User = ({users, loader}) => {

  const dispatch = useDispatch()
  const team = useSelector(state => state?.team)

  const addToButton = (items) => {
    

dispatch(addTeam(items))
  }

  return (
    <div className='users'>

        {
            users.map(items => (
                <div className='user'> 
                    <img src={items?.avatar} alt="" />
                 <h2>{`${items?.first_name} ${items?.last_name}`}</h2>
                 <h4>{`Gender : ${items?.gender}`}</h4>
                 <h4>{`Email : ${items?.email}`}</h4>
                 <h4>{`Domain : ${items?.domain}`}</h4>
                 <h4>{`Available : ${items?.available ? 'Yes' : 'No'}` }</h4>
                {items?.available && <button onClick={() => addToButton(items)} className='btn'>Add To Team</button> }

                </div>

            ))
        }
      
      
    </div>
  )
}

export default User
