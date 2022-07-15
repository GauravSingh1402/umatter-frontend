import React, { Component } from 'react'
import Surveyform from './Surveyform';
import Surveyform2 from './Surveyform2';
import Surveyform3 from './Surveyform3';
import Surveyform4 from './Surveyform4';
import Surveyform5 from './Surveyform5';
import Submit from './Submit';
export class Survey extends Component {
  state={
      step: 1,
      givenName:null,
      age:null,
      gender:null,
      self_employed:null,
      family_history:null,
      work_interfere:null,
      remote_work:null,
      tech_company:null,
      benefits:null,
      care_options:null,
      wellness_program:null,
      seek_help:null,
      anonymity:null,
      leave:null,
      mental_health_consequence:null,
      phys_health_consequence:null,
      coworkers:null,
      supervisor:null,
      mental_health_interview:null,
      phys_health_interview:null,
      mental_vs_physical:null,
      obs_consequence:null,
      treatment:null
  }
  nextSection=()=>{
      const{step}=this.state;
      this.setState({
          step:step+1
      });
  }
  prevSection=()=>{
    const{step}=this.state;
    this.setState({
        step:step-1
    }); 
  }
  revert=()=>{
    const{step}=this.state;
    this.setState({
        step:1
    }); 
  }
  handleChange=input=>e=>{
      this.setState({[input]:e.target.value});
  }
  handleTreat=vals=>{
      this.setState({['treatment']:vals});
  }
  render() {
      const{ step }=this.state;
      const{ givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
        phys_health_consequence,coworkers,supervisor,mental_health_interview,
        phys_health_interview,mental_vs_physical,obs_consequence,treatment} = this.state;
      const values = {step,givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
        phys_health_consequence,coworkers,supervisor,mental_health_interview,
        phys_health_interview,mental_vs_physical,obs_consequence,treatment }
   switch(step){
       case 1:
           return(
               <Surveyform nextSection={this.nextSection} handleChange={this.handleChange} values={values}></Surveyform>
           )
       case 2:
           return(
            <Surveyform2 nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Surveyform2>
           )
        case 3:
            return(
                <Surveyform3 nextSection={this.nextSection} 
                prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Surveyform3>
            )
       case 4:
           return(
            <Surveyform4 nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Surveyform4>
           )
           case 5:
           return(
            <Surveyform5 nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Surveyform5>
           )
           case 6:
            return(
             <Submit nextSection={this.nextSection} 
             prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Submit>
            )
       
           default:
            (console.log('This is a multi-step form built with React.'))
   }
  }
}

export default Survey