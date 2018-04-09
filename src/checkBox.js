import React from 'react';
import { ClearText } from './Actions';
import {connect} from 'react-redux';

export class Checkboxblk extends React.Component {
  constructor(props){
    super(props);
    this.state={ 
      checked:true
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClear=this.handleClear.bind(this);
  }
  handleChange(e){
    this.setState={
      checked:!e.checked
    }
  }
  handleClick(e){

  }
  handleSubmit(e){
    
  }
  handleClear(e){
    e.preventDefault();
    this.props.dispatch(ClearText(this.state));
  }

  render() {
    return (
      <div className="App">
        <h1> check box example </h1>
        <div>
          <input type="checkbox" id="chk1" value="one" onClick={this.handleClick} onChange={this.handleChange} checked="false" />
          <label>ONE</label>
        </div>
        <div>
          <input type="checkbox" id="chk2" value="two" onClick={this.handleClick} onChange={this.handleChange} checked="false"/>
          <label>TWO</label>
        </div>
        <div>
          <input type="checkbox" id="chk3" value="three" onClick={this.handleClick} onChange={this.handleChange} checked="false" />
          <label>THREE</label>
        </div>
        <div>
          <button type="submit" id="submit" onSubmit={this.handleSubmit}> SUBMIT </button>
          <button id="clear" onClick={this.handleClear} > CLEAR </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    console.log('mapstateToProps-----',state)
    return state;
}

export default connect(mapStateToProps)(Checkboxblk);
