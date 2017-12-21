class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options : props.options
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
    const option = this.state.options[randIndex];
    alert(option);
  }
  handleAddOption(option){
    if (!option) {
      return 'Enter valid value';
    }else if( this.state.options.indexOf(option) > -1 ){
      return 'This option already exists';
    }
    this.setState( (prevState)=>{
      return{
        options : prevState.options.concat([option])
      };
    });
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
            handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  };
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2>}

    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return(
    <div>
      <button
        onClick={ props.handlePick }
        disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return(
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.map( (option) => <Option key={option} optionVal={ option } /> ) }
    </div>
  );
};

const Option = (props) => {
    return(
      <div>{ props.optionVal }</div>
    );
};

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }

  handleAddOption( e ){
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.option.value = '';

    this.setState(()=>{
      return { error };
    });

  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" placeholder="Add option here"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
