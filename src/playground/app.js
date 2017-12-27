class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options : []
    };
  }
  componentDidMount(){
    console.log('Fetching data');
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    try {
      if (options) {
        this.setState(() => ({ options }) );
      }
    } catch (e) {
      // console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      console.log('Save data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }


  handleDeleteOptions(){
    this.setState(()=>( { options : [] } ));
  }
  handleDeleteOption(option){
    console.log('hdo', option);
    this.setState(( prevState )=>{
      const newOptions = prevState.options.filter((curOption)=>
        curOption !== option );
      return { 'options' : newOptions }
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
    this.setState( (prevState)=>({
        options : prevState.options.concat([option])
      }));
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
      {props.options.length === 0 && <p>Add an option to get started</p>}
      { props.options.map( (option) => (
        <Option
          key={option}
          optionVal={ option }
          handleDeleteOption={ props.handleDeleteOption }
        />
      )) }
    </div>
  );
};

const Option = (props) => {
    return(
      <div>
        { props.optionVal }
        <button onClick={ (e) => {
          props.handleDeleteOption(props.optionVal);
        } }>X</button>
      </div>
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
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }

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
