import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserSlice = createSlice({
    name: 'user',

    initialState: [],
    
    reducers: {
        addUser(state, action) { 
            state.push(action.payload)
        },
        removeUser(state, action) { 
            state.splice(action.payload, 1)
        },
    }
})

export const { addUser, removeUser } = UserSlice.actions
export default UserSlice