// component for side navbar
import React from 'react';
import '../styles/SideNavbar.scss';

import { 
    Event, 
    Settings,
    Alarm,
    AccessAlarm,
    ErrorOutline
} from '@material-ui/icons';

class UserInfo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return(
            <div className="UserInfo">
                <Settings />
                <AccessAlarm />
                <img className="userProfilePic" src={this.userProfilePicSrc}></img>
                <button className="settingsButton">
                    <span class="material-icons-outlined"></span>
                </button>
                <h3 className="userName"></h3>
            </div>
        );
        
    }
}

class TodoActions extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return (
        <div className="TodoActions">
            <Event />
            <button className="todayButton">Today</button>
            <Alarm />
            <button className="allTodoButton">All todos</button>
            <ErrorOutline />
            <button className="overdue">Overdue</button>
        </div>
        );

    }
}

// class CustomLists extends React.Component {
//     //constructor(props){
//     //    super(props);
//     //}

//     render() {
//         return;
//     }
// }

//class to create sideNavbar react component
class SideNavbar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div className="SideNavbar">
                <UserInfo />
                <TodoActions />
                {/* <CustomLists />  */}
            </div>  
        );
    }
}

export default SideNavbar;