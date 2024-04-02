import React, { useEffect, useState } from 'react'
import './teams.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
const Teams = () => {

    const [team , setTeam] = useState([])


    useEffect(() => {

        const getApi = async() => {
  const res = await axios.get('https://heliserver.onrender.com/api/teams')
  setTeam(res.data)
        }

        getApi()
    }, [])
  return (

   
    <div className='teams'>
      
      <Navbar/>

<div className='teamsHead'>

      <h2>All Teams</h2>
</div>
<div className='allTeams'>

    {
        team.map(items => (
            
            <div className='teamsFull'>
                {
                    items?.members.map(item => (
                        <div className='team'>
                        <img src={item?.avatar} alt="" srcset="" />
                        <h3>{`${item?.first_name} ${item?.last_name}`}</h3>
                        <h3>{`${item?.gender}`}</h3>
                        <h3>{`${item?.email}`}</h3>
                        <h3>{`${item?.domain}`}</h3>
                        </div>
                    ))
                }
            </div>
        ))
    }
        </div>
          </div>
  )
}

export default Teams
