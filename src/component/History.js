import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as Form1} from '../svg/history.svg' 
import Form2 from '../svg/history.png'
import Table from './CustomizedTable'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    justifyContent:'center',
    backgroundColor:'rgb(115, 212, 249, .5)'
    
  },
  image: {
    display:'flex', 
    width:'100%', 
    justifyContent:'flex-start', 
    paddingLeft:'20px', 
    paddingTop:'50px'
    
  },
  papermain: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'20px',
    width:'65%',
  },
  signin:{
    borderRadius:'20px',
    backgroundColor:'#EEF7FC',
    // paddingRight:'80px'
  },
  paper: {
    margin: theme.spacing(3, 0),
    display: 'flex',
    flexDirection: 'column',
    
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#56CBF8',

  },
  history:{
      borderColor:"#2ABB34",
      color:'#2ABB34'
  }
}));

export default function History() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Paper elevation={5} className={classes.papermain} >
    
      <Grid item xs={12} sm={8} md={12} component={Paper}  square className={classes.signin} >
        <div className={classes.paper}>
        <Grid item style={{display:'flex',justifyContent:'center'}}>
          <Typography style={{fontFamily:'Segoe UI', fontSize:'40px', fontWeight:'bold', color:'#3BA3CB', margin:'20px'}}>
            Your Leave's History
          </Typography>
          </Grid>
          <Table />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.image}>
              <img src={Form2} style={{width:'60%'}} />
          </Grid>
          </Grid>
          
        </div>
      </Grid>
      
      </Paper>
    </Grid>
  );
}