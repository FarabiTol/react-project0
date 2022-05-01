import React from 'react';
import './App.css';
import Char from './components/Char'
import {Routes, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 2500);
  }

  render() {
   return this.state.loading ? (
     <h6 className="loading">Loading...</h6>
   ) : (
     <div className="App">
       <Routes>
         <Route exact path="/" element={<Char />} />
         <Route exact path="*" element={<Char />} />
       </Routes>
     </div>
   );
  }

}

export default App;