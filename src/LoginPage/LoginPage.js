import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import APIKit, {setClientToken} from '../component/APIKit'
import axios from 'axios'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Kelompok 2
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

 

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      
    };

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);

  }



  onUsernameChange = (event) =>{
    this.setState({username: event.target.value});
  };

  onPasswordChange = (event) =>{
    this.setState({password: event.target.value});
  }

  onPressLogin = () => {
    alert('Hello')
    const Data = {
      username : this.state.username,
      password : this.state.password,
    }
    const config ={
      headers: {
        'Content-Type': 'application/json',
      }
    }
    axios({
      method: 'post',
      url: 'https://localhost:44376/api/token',
      headers: config,
      data: Data,
    }).then(data => {
        console.log(data)
      } )
      .catch(err => {
        console.log(err)
      })
  //   fetch('https://localhost:44376/api/Employee', {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         username: this.state.username,
  //         password: this.state.password
  //       })
  //   }).then((Response) => Response.json())
  //       .then((result) => {
  //         if(result.Status == 'invalid')
  //           alert('Invalid User');
  //           else 
  //             this.props.history.push("/Dashboard")
  //       })
  // }
  }

  
  
  render(){
  return (

         <div>
            

           
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="username"
              name="username"
              autoFocus
              value={this.state.username}
              onChange={this.onUsernameChange}
             
            />
           
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              
            />
            

          
           <Grid container>
              <Grid item xs>
             
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <input 
            type="submit" 
            onClick={this.onPressLogin} name="signin" id="signin" className="form-submit" defaultValue="Log in" />
            <Box mt={5}>
              <Copyright />
            </Box>
            </div>
  
  )
}}
