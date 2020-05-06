
import { makeStyles } from '@material-ui/core/styles';
import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import LoginPage from '../LoginPage/LoginPage'
import {ReactComponent as LoginImage} from '../svg/login.svg'


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      justifyContent:'center',
      backgroundColor:'rgb(115, 212, 249, .5)'
      
    },
    image: {
      // backgroundImage: 'url(../svg/login.png)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderTopLeftRadius:'20px',
      borderBottomLeftRadius:'20px',
    },
    
    papermain: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'row',
      borderRadius:'20px',
      width:'55%',
    },
    signin:{
      borderTopLeftRadius:'20px',
      borderBottomLeftRadius:'20px',
      backgroundColor:'#EEF7FC',
      // paddingRight:'80px'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'#56CBF8'
    },
  }));
  
export default function SignInstyle() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Paper elevation={5} className={classes.papermain} >
        <Grid item xs={12} sm={8} md={7} component={Paper}  square className={classes.signin} >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login to Your Account
            </Typography>

            <LoginPage />
            </div>
      </Grid>
      <Grid item xs={false} sm={4} md={6}  className={classes.image}  >
          <div style={{height:'100%', backgroundColor:'#F6FBFE',  display:'flex', justifyContent:'flex-start', alignItems:'flex-end',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px', paddingRight:'20px'}}>
              <LoginImage style={{height:'100%',}}/>
          </div>
          </Grid>
      </Paper>
    </Grid>
  );
}