import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js'
import HorizontalBarChart from './components/HorizontalBarChart/HorizontalBarChart.js'
import JobTrends from './components/JobTrends/JobTrends';
import SpamDetection from './components/SpamDetection/SpamDetection';




const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <div id='sentimentanalysis'><HorizontalBarChart></HorizontalBarChart></div>
      <div id='jobtrends'><JobTrends></JobTrends></div>
      <div id='spamdetection'><SpamDetection></SpamDetection></div>
    </div>
  );
};

export default App;
