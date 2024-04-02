import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'
import Navbar from '../components/Navbar'
import User from '../components/User'
import { useSelector } from 'react-redux'
import UserTeamList from '../components/UserTeamList'

const Home = () => {

    const [users , setUsers] = useState([])
    const [page , setPage] = useState(1)
    const [gender , setGender] = useState('')
    const [domain , setDomain] = useState('')
    const [available , setAvailable] = useState('')
    const [search , setSearch] = useState('')
    const [searchVal , setSearchVal ] = useState('')
    const [showTeam , setShowTeam ] = useState(false)

    // const [page , set] = useState(1)

    const teams = useSelector(state => state?.team)
    


useEffect(() => {

    const getApi = async() => {
    
        const res = await axios.get(`https://heliserver.onrender.com/api/users?page=${page}`)
        setUsers(res.data)
       


    }

    getApi()
}, [page])





useEffect(() => {
    const getApi = async() => {
    
      
           
            const res = await axios.get(`https://heliserver.onrender.com/api/users?gender=${gender}&domain=${domain}&available=${available}&search=${search}`)
            setUsers(res.data)
 
       
    }

    getApi() 

}, [gender, domain , available, search])
const loader = () => {

    setPage(page + 1)
}




  return (
    <div className='home'>
        <Navbar search={search} setSearch = {setSearch} searchVal = {searchVal}  setSearchVal={setSearchVal} showTeam= {showTeam} setShowTeam = {setShowTeam}/>
       { teams?.teams.length > 0 && <UserTeamList />}


<div className='userHead'>

<h2>Users List</h2>        
</div>
        <div className='filters'>
            <div>

            <select name="" id="" onChange={(e) => setGender(e.target.value)} value={gender }>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <select name="" id="" onChange={(e) => setDomain(e.target.value)} value={domain}>
                <option value="">Domain</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Management">Management</option>
                <option value="IT">IT</option>
            </select>
            <select name="" id="" onChange={(e) => setAvailable(e.target.value)} value={available}>
                <option value="">Check Availibility</option>
                <option value= 'true' >Available</option>
            </select>
            </div>
        </div>

        {users?.length > 0 ? <User users = {users} loader = {loader}/> : <h2>Loading...</h2>}
      <div className='load'> 

        <button onClick={() => loader()} className='btn'>Load More</button>
      </div>
    </div>
  )
}

export default Home
