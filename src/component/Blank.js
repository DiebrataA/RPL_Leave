import React, { useState, useEffect} from 'react';
import {connect} from "react-redux"
import * as actions from "../action/leave"
// import { useStore } from 'react-redux';


// const Blank =(props)=>{
//     const [x,setX]= useState(0)

//     useEffect(()=>{
//         props.fetchAllBlank()
//     },[])//ComponentDidMount


//     return(
//         <div>from Blank</div>
//     );
// }

// const mapStateToProps = state=>{
//     return{
//      leaveList: state.leave.list
// }
// }

// const mapActionToProps = {
//     fetchAllBlank: actions.fetchAll() 
// }
// export default connect()(Blank) ;