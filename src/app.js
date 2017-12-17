class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision App";
    const subtitle = "This is the subtitle content";
    const options = ['option 1', 'option 2', 'option 3'];

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
    render(){
      return(
        <div>
          <button>Action button</button>
        </div>
      );
    }
}

class Options extends React.Component{
    render(){
      return(
        <div>
          {this.props.options.map( (option) => <Option key={option} optionVal={ option } /> )}
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
    render(){
      return(
        <div>
          AddOption here
        </div>
      );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
