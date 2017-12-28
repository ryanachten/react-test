import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
  state = {
    options : []
  };

  handleDeleteOptions = () => {
    this.setState(()=>( { options : [] } ));
  };
  handleDeleteOption = (option) => {
    console.log('hdo', option);
    this.setState(( prevState )=>{
      const newOptions = prevState.options.filter((curOption)=>
        curOption !== option );
      return { 'options' : newOptions }
    });
  };
  handlePick = () => {
    const randIndex = Math.floor( Math.random() * this.state.options.length);
    const option = this.state.options[randIndex];
    alert(option);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    }else if( this.state.options.indexOf(option) > -1 ){
      return 'This option already exists';
    }
    this.setState( (prevState)=>({
        options : prevState.options.concat([option])
      }));
  };

  componentDidMount(){
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    try {
      if (options) {
        this.setState(() => ({ options }) );
      }
    } catch (e) {
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      console.log('Save data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render(){
    const subtitle = "This is the subtitle content";

    return(
      <div>
        <Header subtitle={ subtitle }/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
          options={ this.state.options }
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  };
}
