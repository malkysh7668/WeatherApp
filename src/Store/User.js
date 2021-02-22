import produce from 'immer'

const initialState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        id:""        
    },
    history: [
        // { cityName: "oslo", description: "Broken Clouds", country: "NO" },
        // { cityName: "athens", description: "few clouds", country: "GR" },
        // { cityName: "madrid", description: "Moderate rain", country: "ES" }
    ],
    cityName: "",
    defaultId: "d2207cf9c493aebf95ff1c1df5618902"
}
// function setState((state, action) => {
//     switch (action.type) {
//         case 'SET_HISTORY_USER':
//             debugger
//             state.user.history = state.user.history.concat(action.payload);
//             break;
//         case 'SET_USER':
//             debugger
//             state.user = action.payload;
//             break;
//     }
// })
export default produce((state, action) => {
    switch (action.type) {
        case 'SET_HISTORY_USER':
            debugger
            if(action.payload!=undefined)
                //  state.history = state.history.concat(action.payload)
                //  state.history = [action.payload];
                 state.history = [action.payload].concat(state.history);
            break;
        case 'SET_USER':
            // debugger
            state.user = action.payload;
            break;
    }
}, initialState)