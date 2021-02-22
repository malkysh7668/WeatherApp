import React from 'react';
import Card1 from './CardComponent';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        // UserReducer
        // user:state.user,
        history: state.UserReducer.history
        // history:state.history
    };
}
export default connect(mapStateToProps)(function ShowCards(props) {
    // const [cityName]=this.state;
    const { history } = props;
    // debugger
    const historyList = history;
    // const list=historyList.slice(-3,-2,-1)
    debugger
    return (
        <>

            <div class="d-flex justify-content-center">
             { <Card1 width={"18rem"} history={historyList[0]}></Card1>}   
            </div>
            <div class="d-flex justify-content-center">
                {/* {historyList.slice(0,1).map()} */}
                { historyList.slice(1, 4).map(hist => (
                    
                    <Card1 width={"12rem"} history={hist}
                    //  style="display: flex;
                    //  align-items: center;
                    //  justify-content: center;"
                    ></Card1>
                    //  country={item.country} city={item.city} description={item.description}
                ))}
            </div>
        </>
    );
})