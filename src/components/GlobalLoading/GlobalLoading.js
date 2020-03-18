import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import LoadingIcon from './../../assets/Loading.gif'
import PropTypes from 'prop-types';
class GlobalLoading extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.loading}>
                <img src={LoadingIcon} alt='loading' className={classes.icon}/>
            </div>
        );
    }
}
GlobalLoading.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(GlobalLoading);