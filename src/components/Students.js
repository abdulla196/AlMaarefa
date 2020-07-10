import React, { Component } from 'react'; 
import logo from '../image/logo.jpg';
import './navbar.css';
import './content.css';
import {getUsers} from '../api/API' 
import {strings} from '../language/data'
export default class Student extends Component{
   changeLanguage = (lng) => { 
      //    console.log(lng)
         this.setState({
          language: lng
        })
      };
      handleLanguageChange(e) {
         e.preventDefault();
         let lang = e.target.value;
         this.setState(prevState => ({
           language: lang
         }))
       }
      state = {
            users :[],
            language: 'en',
            addClass: false
      }

  componentDidMount = () => {
        
   getUsers().then(response => {
      this.setState({
          users:response.data, 
      })
   })
      .catch(error=>{
            alert('Error');
      })
      
   }
   toggle() {
      this.setState({addClass: !this.state.addClass});
   }
   render (){
      let boxClass = ["box"];
      if(this.state.addClass) {
         boxClass.push('green');
      }
      strings.setLanguage(this.state.language);
      return <div>
               <div id="navbar">
                <div className="row m-0 justify-content-center">
                    <div className="col-lg-3 col-6 my-auto">
                        <div>
                            <button className="language" onClick={() => this.changeLanguage('en')}>
                                EN
                            </button>
                            <button className="language" onClick={() => this.changeLanguage('Ar')}>
                                AR
                            </button>
                        </div>
                        <p className="m-0 contact">contactus@mcst.edu.sa</p>
                    </div>
                    <div className="col-lg-6 col-4 text-center">

                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="col-lg-3 col-2 text-right my-auto">
                    <i className="fa fa-user mr-3" onClick={this.toggle.bind(this)}></i>
                    </div>
                    
                </div>
                </div>
                <div className={boxClass.join(' ')} >
                    <div className="sidebar text-left">
                        <div className="userdata ">
                            <i className="fa fa-chevron-right mr-3" onClick={this.toggle.bind(this)}></i>
                            <i className="fa fa-user mr-4" onClick={this.toggle.bind(this)}></i>
                           <span className="username">{strings.admission}</span>
                        </div>
                        <div className="links">
                            <ul>
                                <li> <a href="#"><i className="fa fa-users mr-4"></i> <span> {strings.Applicants} </span></a></li>
                                <li> <a href="#"><i className="fa fa-calendar mr-4"></i> <span> {strings.Dates} </span></a></li>
                                <li> <a href="#"><i className="fa fa-sign-out mr-4"></i> <span> {strings.signout} </span></a></li>
                            </ul>
                        </div>
                    </div>    
                </div> 
                <div className="row m-0">
                  <div className="col-md-9 mx-auto">
                      <div className="content">
                      <table className="table table-striped">
                <thead>
                    <tr> 
                     <th scope="col">{strings.Name}</th>
                     <th scope="col">{strings.Status}</th>
                     <th scope="col">{strings.Major}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user ,index)=> 
                        <tr key={index}>
                            <th scope="row"><i className="fa fa-user f-2x"></i> {user.name}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td> 
                            
                        </tr> 
                    )} 
                    </tbody>
                
                </table>
                        
                      </div>
                   </div>
                </div>
            </div>
   }
    
}