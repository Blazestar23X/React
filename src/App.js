import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count,setCount] = useState(150);
  const [colour, setColour]= useState('orange');
  const [previous, setPrevious] = useState('');
  const handleClickA = ()=>{
	setColour('green');
	setCount(count+1);
	setPrevious("You just earned $1");
	};
 const handleDonate = ()=>{
	setColour('red');
	setCount(count-2);
	setPrevious("You donated $2. What a Charitable Lad");
	};
  useEffect(() => {
	if (count >200){
	  setCount(0);
	}
  },[count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	<p>What did i tell you, Now i just need to make some money.</p>
	<div style={{display: 'flex', flexDirection:'row',gap:'50px'}}>
	<button onClick={()=> handleClickA()}>Free Money</button> 
	<button onClick={()=> handleDonate()}>Donate</button>
	</div>
	<h1 style={{color: colour}}>${count}</h1>
	<h2 style={{color: colour}}>{previous}</h2>
	<h3>
	  {count === 0
	    ? "Wow, you're greedy! For that, you lose everything."
	    : "Maybe you could give a little to the homeless."}
	</h3>
      </header>
      <p>Third Message this will work</p>
    </div>
  );
}

export default App;
