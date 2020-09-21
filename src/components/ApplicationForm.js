import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { startAddApplications } from '../actions/applicationsAction'
import SweetAlert from 'sweetalert2-react'

class ApplicationForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            phone:'',
            jobTitle:'',
            experience:'',
            skills:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(e)=>{ 
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            jobTitle:this.state.jobTitle,
            experience:this.state.experience,
            skills:this.state.skills,
            show:this.state.show
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startAddApplications({redirect,formData}))
    }
    render(){
        return(
            <div className ="container">
                <h3 >Fill in all the details</h3>
                <form onSubmit={this.handleSubmit} className="form" >
                    <label htmlFor="fullName">Name</label>
                    <input id="fullName" name="name" value={this.state.name} onChange={this.handleChange} placeholder="fullname"/><br/>
                
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="abc@gmail.com"/><br/>

                    <label htmlFor="contact">Phone</label>
                    <input id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="+91 1234567890"/><br/>

                    <label htmlFor="applying">jobTitle</label>
                    <select id="applying" value={this.state.jobTitle} name="jobTitle" onChange={this.handleChange}>
                        <option value="select any one" hidden>Select any one</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Node.js Developer">Node.js Developer</option>
                        <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                        <option value="FULL Stack Developer">Full Stack Developer</option>
                    </select><br/>

                    <label htmlFor="experience">Experience</label>
                    <input id="experience" name="experience" value={this.state.experience} onChange={this.handleChange} placeholder="x years y months"></input><br/>

                    <label htmlFor="skills">Skills</label><br/>
                    <textarea id="skills" name="skills" value={this.state.skills} onChange={this.handleChange}
                    rows="5" cols="50" placeholder="Technical Skills"></textarea><br/><br/>

                    <button type="submit" value="Submit" > Submit Application </button>
                    <SweetAlert
                                show={this.state.show}
                                title="SUCCESS"
                                text="Succesfully Applied"
                                onConfirm={() => this.setState({ show:true })}
                                />
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        applications:state.applications
    }
}
export default withRouter(connect(mapStateToProps)(ApplicationForm))