import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem('jobs')) || [],
}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers:{
        addJob: (state, action)=>{
            state.value = [...state.value, {jobName: action.payload, completed: false}];
            localStorage.setItem('jobs', JSON.stringify(state.value));
        },
        removeJob: (state, action)=>{
           state.value.splice(action.payload , 1); 
           localStorage.setItem('jobs', JSON.stringify(state.value));
        },
        completeJob: (state, action)=>{
            state.value[action.payload].completed = true; 
            localStorage.setItem('jobs', JSON.stringify(state.value));
         },
    }
})

export const {addJob, removeJob, completeJob} = jobsSlice.actions;
export default jobsSlice.reducer