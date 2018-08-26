import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import FlatButton from 'material-ui/FlatButton';
import {GridTile} from 'material-ui/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Icon from "../../node_modules/@material-ui/core/Icon/Icon";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    gridList: {
        width: 1005,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    leftIcon: {
        marginLeft: theme.spacing.unit,
    },
    rightIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    title: {
        height: '40',
    },




});


class GList extends React.Component{

    render(){

        let users = this.props.dt;

        const carList = []

        for (let i = 0; i < users.length; i++) {
            carList.push(
                <GridTile
                    key={i}

                    title={<b>{users[i].ownerFullName}</b>}
                    subtitle={users[i].carMake}
                    actionIcon={<FlatButton
                        label="Order"
                        primary={true} />}>

                    {<b>{users[i].carModel}</b>}
                </GridTile>
            );
        }

        const { classes } = this.props;
        return(
            <div className = "right split">
                <div style={styles.root}>
                    <GridList
                        cellHeight={200}
                        style={styles.gridList}
                        cols={2}
                    >
                        {carList}
                    </GridList>
                </div>
            </div>);


    }

}


export default withStyles(styles)(GList);