'use strict';


const e = React.createElement;

function getRandom(items) {
  return items[Math.floor(Math.random()*items.length)];
}

const Button = ({name, onClick, children}) => {
  return (
    <input className="btn btn-randomize-namepart" type="submit" name={name} onClick={onClick} value={children} />
  )
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '', 
    };
  }

  componentWillMount() {
    this._randomAll()
  }

  _randomAll() {
    Object.keys(this.state).forEach(name => {
      this.setState({
        [name]: getRandom(nameData[name])
      })
    })
  };
  
  handleGetNameClick = (e) => {
    this.setState({
      [e.target.name]: getRandom(nameData[e.target.name])
    })
  };
  
  render() {
    const {firstName} = this.state;
    return e(
      <div className="container">
        <div className="name">
          <div>
            <span className="firstname">{firstName}</span>
            <br />
          </div>
        </div>
        <div className="m-y">
          <button className="btn btn-random" onClick={this._randomAll.bind(this)}>is my name</button>
        </div>
        <small className="randomize-note">Click</small>
        <Button name="firstName" onClick={this.handleGetNameClick}>First name</Button>
      </div>
    )
  }
}

const nameData = {
	"firstName": ["callista", "calida", "cele", "cecelia", "cardea", "celesta", "casta", "clora", "cyrilla", "cyra", "cesira", "caria", "celia", "coretta", "cora", "clea", "calise", "cali", "cleo", "celena", "cleta", "coleta", "cressida", "ceres", "cyrena", "calida", "cuora", "camila", "clara", "costa", "carina", "ciel", "cara", "cerelia", "carria", "cira", "cinzia", "celeste", "lira", "cora", "celica", "celsa", "malva", "corradea", "cira", "cereal"
	]
}

const domContainer = document.querySelector('#name_container');
const root = ReactDOM.createRoot(domContainer);
