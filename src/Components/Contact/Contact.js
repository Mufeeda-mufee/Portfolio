 import './Contact.css';
 import emailjs from 'emailjs-com';
//  import ReactDOM from 'react-dom';
 import React, { Component } from 'react';
// import { render } from '@testing-library/react';
  


class Mailer extends Component{
    state={
        name:"",
        email:"",
        message:""
    }
   

    sendEmil=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""||this.state.message===""){
            alert("All the fields are mandatory");
            return
        }
        emailjs.sendForm(
        'service_zo57cfw',
        'template_c6njzyj',
        e.target,
        'user_BZakpJ5G799mzOE6rgnEQ')
        .then(res=>{
            console.log(res)
           
            this.setState({name:"",email:"",message:""});
            alert("Email sent");
          
            this.state.history.push("/");
        }).catch(err=>console.log(err));

       
      
    }
    render(){
    return(
        <div className="Contact" id="contact">
        <div className="container "
        style={{paddingTop:"3px",
       
    }}>
            
            <h1 style={{marginTop:"25px"}}>Contact Form</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={this.sendEmil}>
                <label>Name</label>
                <input type="text" name="name" className="form-control"   value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                <label>Email</label>
                <input type="email" name="user_email"  className="form-control"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
                <label>Message</label>
             <textarea name="message" rows='4' className="form-control"  value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})}/>
             <input type="submit" value='Send' className="form-control btn btn-primary" 
              
             style={{marginTop:"30px",marginBottom:"30px"}}/>
            </form>
           
        </div>
        </div>
    )
}
};
export default Mailer;