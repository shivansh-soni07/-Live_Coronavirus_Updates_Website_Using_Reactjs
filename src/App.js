
import './App.css';
import _home from './home'
import  _footer from './footer'
// import  _about from './about'
import React from "react";
import { Cards, Chart, Countries } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/Covidlogo.png";
import { Box } from "@material-ui/core";



    class App extends React.Component {
        state = {
            data: {},
    country: "",
  };
  async componentDidMount() {
    this.setState({ data: await fetchData() });
  }
  CountryHandler = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };
  render() {
    const { data, country } = this.state;
   
        
    return (
      <Box  
      className={styles.container}
      >
      <img className='giplogo' src='https://media.giphy.com/media/PnD1HSO0rVx8AiNIMl/giphy.gif' alt="COVID-19" />
        
          <Cards data={data} />
          <Countries CountryHandler={this.CountryHandler} />
          <Chart data={data} country={country} />
          <div className="about">

          
          
          </div>
        </Box>
        
    );
     }
    
}

export default App;
