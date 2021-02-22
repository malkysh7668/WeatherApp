import React from 'react'; 
import ShowCards from './showCards';
import SearchComponent from './search';
import $ from 'jquery';
import { connect } from 'react-redux'

// const mapDispatchToProps = (dispatch) => ({
//     set_user: (user) => dispatch(actions.setUser(user)),
//     set_history_user: (histories) => dispatch(actions.setHistoryUser(histories))
// })
// export default connect(null, mapDispatchToProps)(
export default class searchShowCards extends React.Component{
    constructor(props){
        super(props)
        // this.getHistoryForUser = this.getHistoryForUser.bind(this)
    }
    // componentDidMount(){
    //     $.ajax({
    //         url: `http://localhost:5000/getHistoryForUser/${userId}`,
    //         method: "get",
    //         dataType: "json",
    //         contentType: "application/json",
    //         success: function (data) {
    //             alert(data)
    //             console.log(data)
    //             return data
    //         },
    //         error: function (XMLHttpRequest, textStatus, errorThrown) {
    //             console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
    //         }
    //     });

    //     let histories = r(data._id)
    //     p.set_user(data)
    //     p.set_history_user(histories)
    // }
    render(){
        return(
            <>
                <SearchComponent/>
                <ShowCards/>
            </>
        )
    }
}
// )