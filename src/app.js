class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options : ['option 1', 'option 2', 'option 3']
    };
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options : []
      };
    });
  }
  handlePick(){
    const randIndex = Math.floor( Math.random() * this.state.options.length);
    alert(this.state.options[randIndex]);
  }

  render(){
    const title = "Indecision App";
    const subtitle = "This is the subtitle content";

    return(
      <div>
        <Header title={ title } subtitle={ subtitle }/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
            options={ this.state.options }
            handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption />
      </div>
    );
  };
}

class Header extends React.Component{

    render(){
      return (
        <div>
          <h1>{ this.props.title }</h1>
          <h2>{ this.props.subtitle }</h2>
        </div>
      );
    }
}

class Action extends React.Component{

  render(){
    return(
      <div>
        <button
          onClick={ this.props.handlePick }
          disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component{

    render(){
      return(
        <div>
          <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
          { this.props.options.map( (option) => <Option key={option} optionVal={ option } /> ) }
        </div>
      );
    }
}

class Option extends React.Component{
    render(){
      return(
        <div>{ this.props.optionVal }</div>
      );
    }
}

class AddOption extends React.Component{

  handleAddOption( e ){
    e.preventDefault();
    const option = e.target.option.value.trim();
    if (option) {
        alert(option);
    }
  }

  render(){
    return(
      <form onSubmit={ this.handleAddOption }>
        <input type="text" name="option" placeholder="Add option here"></input>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
