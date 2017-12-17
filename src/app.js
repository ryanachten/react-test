class IndecisionApp extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  };
}

class Header extends React.Component{
    render(){
      return (
        <div>
          <h1>Indecision App</h1>
          <h2>Some cool subtitle here</h2>
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
          <select>
            <Option />
            <Option />
            <Option />
          </select>
        </div>
      );
    }
}

class Option extends React.Component{
    render(){
      return(
        <option>Option name here</option>
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
