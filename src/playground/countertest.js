class Counter extends React.Component{

  constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleResetCounter = this.handleResetCounter.bind(this);

      // default state object
      this.state = {
        count: 0
      };
  }

  componentDidMount(){
    console.log('fetch data');
    const count = parseInt( localStorage.getItem('count'), 10);
    if ( !isNaN(count) ) {
      this.setState( () => ({count}) );
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne(){
    this.setState( (prevState) => {
      return {
        count: prevState.count+1
      }
    });
  }
  handleMinusOne(){
    this.setState( (prevState) => {
      return {
        count: prevState.count-1
      }
    });
  }
  handleResetCounter(){
    this.setState( () => {
      return {
        count: 0
      }
    });
  }

  render(){

    return (
    <div>
      <h1>Count: { this.state.count }</h1>
      <button onClick={ this.handleAddOne }>+1</button>
      <button onClick={ this.handleMinusOne }>-1</button>
      <button onClick={ this.handleResetCounter }>Reset</button>
    </div> );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
