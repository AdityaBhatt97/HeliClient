import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({

    name : 'team',
    initialState : {
        teams :  [],
        quantity : 0
    }
    ,
    reducers : {

        addTeam :  (state , action) => {

            const sameDomain = state.teams.find(item => item?.domain === action.payload?.domain || item?._id === action.payload?._id)

             if(sameDomain){

            alert('User has already been added or they are of same Domain!')
            }else{

                console.log('action' , action.payload)
           state.teams.push(action.payload)
           state.quantity += 1
            }
        },

        removeUser : (state , action) => {

            state.quantity -= 1;
            state.teams = state.teams?.filter(item => item._id !== action.payload);
        }
    }
})


export  const {addTeam , removeUser} = teamSlice.actions
export default teamSlice.reducer
