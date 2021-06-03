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
                <div className="UserInfoTop">
                    <div className="userProfilePic"></div>
                    <Settings className="Settings"/>
                </div>
                <div className="UserInfoBottom">
                    <h3 className="userName">John Smith</h3>
                </div>
            </div>
        );
        
    }
}

class SideMenuOptions extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return (
        <div className="SideMenuOptions">
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
                <SideMenuOptions />
                {/* <CustomLists />  */}
            </div>  
        );
    }
}

export default SideNavbar;