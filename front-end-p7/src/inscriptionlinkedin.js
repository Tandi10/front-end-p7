import React, { Component } from 'react';
import './inscriptionlinkedin.css';

class Inscriptionlinkedin extends Component {
  render() {
    return (

<div className="container-linkedin">
  <form>
   <div className="imgcontainer">
     <img src="#" alt="Avatar" class="avatar"/>
   </div>
   <div className="container">
     <div>
     <label><b>Username</b></label>
     <input type="text" placeholder="Enter Username" name="uname" required/>
   </div>
   <div>
     <label><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" required/>
   </div>
   <div className="container1">
     <button type="submit">Login</button>
     <input type="checkbox" checked="checked"/> Remember me
     <button type="button" class="cancelbtn">Cancel</button>
     <span className="psw">Forgot <a href="#">password?</a></span>
   </div>
 </div>
 </form>

</div>

    );
  }
}

export default Inscriptionlinkedin;
