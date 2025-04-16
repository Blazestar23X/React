import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import LineChart from './LineChart';
import MyChartComponent from "./MyChartComponent";

function App() {
  const [count,setCount] = useState(50);
  const [colour, setColour]= useState('orange');
  const [previous, setPrevious] = useState('');
  const [timer, setTimer] = useState(30);
  const totalTime = 30;
  const handleClickA = ()=>{
	setColour('blue');
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
  useEffect(()=>{
	if(timer===0){
	  alert("Uh-Oh Time is up. Time to Restart my Game");
	  setCount(150);
	  setTimer(30);
	}else{
	  const interval = setInterval(()=>{
	    setTimer(prev => prev - 1);
	  },1000);
	  return () => clearInterval(interval);
	}
  },[timer]);
  const strokeDashoffset = (timer/totalTime)*440;
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
	<div>
	  <svg width="150" height="150" viewBox = "0 0 150 150">
	  {/* Background Circle */}
	  <circle cx="75" cy="75" r="70" stroke="#e6e6e6" strokeWidth="10" fill="none"/>
	  {/* Foreground Circle (progress) */}
	  <circle cx="75"
          cy="75"
          r="70"
          stroke="#00ff00"
	  strokeWidth="10"
	  fill="none"
	  strokeDasharray="440"
	  strokeDashoffset={strokeDashoffset}
	  strokeLinecap="round"
	  style={{ transition: "stroke-dashoffset 1s linear" }}
	  />
	  </svg>
	  Timer: {timer}s
	</div>
	<div>
	  <label>To-Do List <input name="Item" /></label>
	  <label> Complete <input type="checkbox" name="myCheckbox"/></label>
	</div>
	<div>
	  <h2> GPT Line Graph</h2>
	  <LineChart />
	  <h4> Why</h4>
	  <MyChartComponent />
   	</div>
      </header>
      <p>Third Message this will work</p>
    </div>
  );
}

export default App;
