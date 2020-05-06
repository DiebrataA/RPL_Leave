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
import {ReactComponent as Form1} from '../svg/form1.svg' 
import Form2 from '../svg/form2.png' 



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
    width:'65%',
  },
  signin:{
    borderTopRightRadius:'20px',
    borderBottomRightRadius:'20px',
    backgroundColor:'#EEF7FC',
    // paddingRight:'80px'
  },
  paper: {
    margin: theme.spacing(3, 4),
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

export default function LeaveForm() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Paper elevation={5} className={classes.papermain} >
      <Grid  sm={8} md={7} container direction="column" justify="center" alignItems="center">
      <Grid item style={{display:'flex', width:'70%'}}>
          <Typography  style={{fontFamily:'Stika Display', fontSize:'35px', fontWeight:'bold'}} >
              Take Your Leave...
          </Typography>
      </Grid>
      <Grid item style={{display:'flex', width:'70%', marginBottom:'40px', marginLeft:'60px'}}>
          <Typography style={{fontFamily:'Stika Display', fontSize:'45px', fontWeight:'bold'}} >
              Take Your Time...
          </Typography>
      </Grid>
      <Grid item style={{display:'flex', width:'70%'}}>
              <img src={Form2} style={{width:'40vmin'}} />
          </Grid>
          <Grid item style={{display:'flex', width:'70%'}}>
              <Form1 />
          </Grid>
          </Grid>
      <Grid item xs={12} sm={8} md={7} component={Paper}  square className={classes.signin} >
        <div className={classes.paper}>
         <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Button
             
              style={{width:'30%'}}
              variant="outlined"
              className={classes.history}
            >
             Leave History
            </Button>
            </div>
          <form className={classes.form} noValidate>
          <Typography component="h1" variant="h5">
          Please fill the data
          </Typography>
          <div>
            <TextField
              variant="filled"
              margin="normal"
              required
              style={{width:'60%'}}
              size="small"
              id="email"
              label="Fullname"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
            <div>
            <TextField
              variant="filled"
              margin="normal"
              required
              style={{width:'50%'}}
              size="small"
              id="email"
              label="Job Title"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
            <div>
            <TextField
              variant="filled"
              margin="normal"
              required
              style={{width:'40%'}}
              size="small"
              id="email"
              label="Start Date"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
            <div>
            <TextField
              variant="filled"
              margin="normal"
              required
              style={{width:'40%'}}
              size="small"
              id="email"
              label="End Date"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
            <div>
            <TextField
              variant="filled"
              margin="normal"
              required
              multiline
              rows="4"
              style={{width:'65%'}}
              size="small"
              id="email"
              label="Reason"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </div>
           <div style={{display:'flex', justifyContent:'center'}}>
            <Button
              type="submit"
              style={{width:'35%'}}
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
            >
             Apply For Leave
            </Button>
            </div>
          
          </form>
        </div>
      </Grid>
      </Paper>
    </Grid>
  );
}