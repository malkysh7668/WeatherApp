const setHistoryUser=(searchedCityWeather)=>{
    return{type:"SET_HISTORY_USER",payload:searchedCityWeather}
}
const setUser=(user)=>{
    // debugger
    return{type:"SET_USER",payload:user}
}
module.exports={setHistoryUser,setUser}
