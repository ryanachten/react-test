class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision App";
    const subtitle = "This is the subtitle content";
    let options = ['option 1', 'option 2', 'option 3'];

    return(
      <div>
        <Header title={ title } subtitle={ subtitle }/>
        <Action />
        <Options options={ options }/>
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

  handlePick(){
    alert('handlePick');
  }

  render(){
    return(
      <div>
        <button onClick={ this.handlePick }>Action button</button>
      </div>
    );
  }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        //binds the this keyword for use in the handleRemoveAll method
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
      console.log(this.props.options);
    }
    render(){
      return(
        <div>
          <button onClick={ this.handleRemoveAll }>Remove All</button>
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
