import React from "react";
import {addPostActionCreater, updatePostActionCreator} from "../../redux/profile-reducer";
import Content from "./Content";
import {connect} from "react-redux";



class ContentContainer extends React.Component {
    render() {
        return (<Content {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreater());
        },

        updateNewPostChange: (text) => {
            dispatch(updatePostActionCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);