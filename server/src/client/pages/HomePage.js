import React, { Component } from 'react';
import parser from 'cron-parser';

import URLconfig from './URLconfig.json';



import { Input } from 'antd';

class Home extends Component{
  constructor(prop){
    super(prop)
  this.state = {
        cronExpression: null,
        humanReadable1: '',
        humanReadable2: '',
        minute: false,
        hour: false,
        dayOfMonth: false,
        month: false,
        dayOfWeek: false,

        minuteval:null,
        minutedesc:null,

        hourval: null,
        hourdesc:null,

        dayofmonth1:null,
        dayofmonth2:null,

        month1: null,
        month2: null,
        month3: null,
        month4: null,

        dayofweek1: null,
        dayofweek2: null,
        dayofweek3: null,
        dayofweek4: null,
        dayofweek5: null,
        dayofweek6: null




      }



  }
  componentDidMount() {
    const { match: { params } } = this.props;
    //  console.log(params.reqParams)
      const urlParam = params.reqParams;
 //console.log(URLconfig)

      if(urlParam){
        for (var key in URLconfig) {
        if(key == urlParam){

          if(URLconfig.hasOwnProperty(key)){
            var val = URLconfig[key].Expression;
         this.setState({ cronExpression: val })
          }
        }

      }
      }
     // convertHumanReadable(val)
     const atserverSideConver = (val) => {
       try {
         var interval = parser.parseExpression(val);

     this.setState({ humanReadable2: interval.next().toString()})

       } catch (err) {
         console.log('Error: ' + err.message);
       }
     }
     atserverSideConver(val)
  }


  render(){

  this.check = (e) => {

      this.setState({ cronExpression: e.target.value })
      convertHumanReadable(this.state.cronExpression);

    }

const humanReadString = (e) =>{
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  // var cors_api_url = 'https://' + cors_api_host + '/';
  const url = `https://${cors_api_host}/cronexpressiondescriptor.azurewebsites.net/api/descriptor/?expression=${e}&locale=en-US`;
  fetch(url)
  .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json =>   this.setState({ humanReadable1: json.description }))
      .catch( err => console.log(err))
}


    const  convertHumanReadable = (value) => {
      try {
        var interval = parser.parseExpression(value);
        humanReadString(value);


    this.setState({ humanReadable2: interval.next().toString()})

      } catch (err) {
        console.log('Error: ' + err.message);
      }
    }


      function handleExpression(e)
       {

      this.setState({ cronExpression : e.target.value });
       // this.convertHumanReadable(e.target.value);

    }



  this.onMinuteSelect = (e) => {
      e.preventDefault()
      this.setState({
        minuteval:'0-59',
        minutedesc:'allowed value',
        minute: true,
        hour: false,
        dayOfMonth: false,
        month: false,
        dayOfWeek: false,
        hourval:null,
        hourdesc:null,
        dayofmonth1:null,
        dayofmonth2:null,
        dayofweek1:null,
        dayofweek2:null,
        dayofweek3:null,
        dayofweek4:null,
        dayofweek5:null,
        dayofweek6:null,
        month1: null,
        month2: null,
        month3: null,
        month4: null,


      })
  }

  this.onHourSelect = (e) => {
    e.preventDefault()
    this.setState({
      minute: false,
      hour: true,
      dayOfMonth: false,
      month: false,
      minuteval:null,
      minutedesc:null,
      hourval:'0-23',
      hourdesc:'allowed value',
      dayOfWeek: false,
      dayofweek1:null,
      dayofweek2:null,
      dayofweek3:null,
      dayofweek4:null,
      dayofweek5:null,
      dayofweek6:null,
      month1: null,
      month2: null,
      month3: null,
      month4: null,
    })
  }

  this.onDaySelect = (e) => {
    e.preventDefault()
    this.setState({
      minuteval:null,
      minutedesc:null,
      hourval:null,
      hourdesc:null,
      dayofmonth1:'1-31',
      dayofmonth2:'allowed value',
      dayofweek1:null,
      dayofweek2:null,
      dayofweek3:null,
      dayofweek4:null,
      dayofweek5:null,
      dayofweek6:null,
      minute: false,
      hour: false,
      dayOfMonth: true,
      month: false,
      dayOfWeek: false
    })
  }

  this.onMonthSelect = (e) => {
    e.preventDefault()
    this.setState({
      minute: false,
      hour: false,
      dayOfMonth: false,
      month: true,
      dayOfWeek: false,
      minuteval:null,
      minutedesc:null,
      hourval:null,
      hourdesc:null,
      dayofmonth1:null,
      dayofmonth2:null,
      dayofweek1:null,
      dayofweek2:null,
      dayofweek3:null,
      dayofweek4:null,
      dayofweek5:null,
      dayofweek6:null,
      month1: '1-12',
      month2: 'allowed value',
      month3: 'JAN-DEC',
      month4: 'alternative single values',

    })
  }

  this.onDayOfWeekSelect = (e) => {
    e.preventDefault()
    this.setState({
      minute: false,
      hour: false,
      dayOfMonth: false,
      month: false,
      dayOfWeek: true,
      minuteval:null,
      minutedesc:null,
      hourval:null,
      hourdesc:null,
      dayofmonth1:null,
      dayofmonth2:null,
      dayofweek1:"0-6",
      dayofweek2:"allowed value",
      dayofweek3:"SUN-SAT",
      dayofweek4:"alternative single values",
      dayofweek5:"7",
      dayofweek6:"sunday (non standard)",
      month1:null,
      month2:null,
      month3: null,
      month4: null,

    })
  }

    return <div>
    <div className='text-center'>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className='container'>
              <div className='container' style={{ textAlign: "center", fontSize: "30px" , marginTop: "120px",}}>
                 {this.state.humanReadable1 && this.state.humanReadable1.search("Error") && <h4>"{this.state.humanReadable1}"</h4>}
             </div>


             <div className='container' style={{ textAlign: "center", fontSize: "10px" , marginTop: "20px",}}>
                {this.state.humanReadable2 && <h6>"{this.state.humanReadable2}"</h6>}
             </div>
      </div>



    <div className='container ' style={{ textAlign: "center"}}>
       <Input placeholder="" size="large" onChange = {this.check}  value={this.state.cronExpression} style={{ marginTop: "10px",   fontSize: "40px",   fontFamily: "monospace", textAlign: "center", width: "70%"}}/>

        <div className='' style={{ textAlign:"center", alignItems:"center"}}>
         <button className='btn' onClick={this.onMinuteSelect} style={{ margin:"2px", width: "140px", fontSize: "15px"}}>minute</button>
         <button className='btn' onClick={this.onHourSelect} style={{ margin:"2px",  width: "140px", fontSize: "15px"}}>hour</button>
         <button className='btn' onClick={this.onDaySelect} style={{ margin:"2px",  width: "140px", fontSize: "15px"}}>day(month)</button>
         <button className='btn' onClick={this.onMonthSelect} style={{ margin:"2px",  width: "140px", fontSize: "15px"}}>month</button>
         <button className='btn' onClick={this.onDayOfWeekSelect} style={{ margin:"2px",  width: "140px", fontSize: "15px"}}>day(week)</button>
        </div>
     </div>


        <div className='text-center container' style={{ textAlign: "center",paddingLeft: "28% !important"}}>
          <table>
          <tr>
            <td>*</td>
            <td>any value</td>
          </tr>
          <tr>
            <td>,</td>
            <td>value list separator</td>
          </tr>
          <tr>
            <td>-</td>
            <td>range of values</td>
          </tr>
          <tr>
            <td>/</td>
            <td>step values</td>
          </tr>


          {this.state.minuteval && <tr>
            <td>{this.state.minuteval}</td>
            <td>{this.state.minutedesc}</td>
          </tr>}
          {this.state.hourval && <tr>
            <td>{this.state.hourval}</td>
            <td>{this.state.hourdesc}</td>
          </tr>}
        {this.state.dayofmonth1 && <tr>
            <td>{this.state.dayofmonth1}</td>
            <td>{this.state.dayofmonth2}</td>
          </tr>}
        {this.state.month1 && <tr>
            <td>{this.state.month1}</td>
            <td>{this.state.month2}</td>
          </tr>}
        {this.state.month1 && <tr>
            <td>{this.state.month3}</td>
            <td>{this.state.month4}</td>
          </tr>}
        {this.state.dayofweek1 && <tr>
          <td>{this.state.dayofweek1}</td>
          <td>{this.state.dayofweek2}</td>
        </tr>}
        {this.state.dayofweek3 && <tr>
          <td>{this.state.dayofweek3}</td>
          <td>{this.state.dayofweek4}</td>
        </tr>}
        {this.state.dayofweek5 && <tr>
          <td>{this.state.dayofweek5}</td>
          <td>{this.state.dayofweek6}</td>
        </tr>}



          </table>
        </div>
      </div>
    </div>

  }


};

export default {
  component: Home
};
