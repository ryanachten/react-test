class VisibilityToggle extends React.Component{
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visiblity: false
    };
  }

  toggleVisibility(){
    this.setState( (prevState) => {
      return {
        visiblity: !prevState.visiblity
      }
    });
    console.log('Visibility', this.state.visiblity);
  }

  render(){
    return (
      <div>
        <h1>Visible?</h1>
        <button onClick={this.toggleVisibility}>
          { this.state.visiblity ? 'Make me invisible' : 'Make me visible' }
        </button>
        {this.state.visiblity && (
          <div>
            <p>hide this info if invisible</p>
          </div>
        )}

      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
