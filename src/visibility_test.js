// Visibility toggle

// show details button toggles details
  // by default set to hidden
  // when clicked, shows details and text of button changes to 'hide details'
// keep track of whether panel is open or closed

let showDetails = false;

const onShowDetails = () => {
  showDetails = !showDetails;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {

  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ onShowDetails }>
        {showDetails ? 'Hide details' : 'Show details' }
      </button>
      {showDetails && (
        <div>
          <p>Name: Ryan</p>
          <p>Age: 25</p>
          <p>Location: Wellington</p>
        </div>
      )}
    </div>

  );

  ReactDOM.render(template , appRoot);
}

render();
