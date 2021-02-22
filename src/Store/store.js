import {createStore} from 'redux'
import {produce} from 'immer'
import { combineReducers } from 'redux';
import  UserReducer  from '../Store/User';

// const initialState={
//     user:{
//         firstName:"",
//         lastName:"",
//         email:"",
//         password:"",
//         history:[
//             {city:"oslo",description:"Broken Clouds",country:"NO"},
//             {city:"athens",description:"few clouds",country:"GR"},
//             {city:"madrid",description:"Moderate rain",country:"ES"}
//         ]
//     },
//     cityName:"",
//     defaultId:"d2207cf9c493aebf95ff1c1df5618902"
// } 


 const reducer= combineReducers({
    
    UserReducer
});



// const reducer=produce((state,action)=>{
    
//     switch(action.type){
//         case 'SET_HISTORY_USER':
//             debugger
//             state.user.history=state.user.history.concat(action.payload); 
//         break;
//         case 'SET_USER':
//             debugger
//             state.user=action.payload; 
//         break;
//     }
// },initialState)

const store =createStore(reducer)
window.store=store;
export default store;