import './App.css';

import HorizontalBarChart from './components/HorizontalBarChart/HorizontalBarChart.js'
import Home from './components/Home/Home.js'

const App = () => {
  return (
    <div className="App">
      <Home></Home>
      <HorizontalBarChart></HorizontalBarChart>
    </div>
  );
};

export default App;
