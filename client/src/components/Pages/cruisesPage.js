import React from 'react';
import axios from 'axios';

class Cruise extends React.Component {
  state = {
    cruises: {},
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    // this is for when we have a route on the backend that corresponds to personality && countrycode
    // const baseUrl = `/quiz/cruise/${this.props.match.params.personality}/${this.props.match.params.countryButton}`;
    const baseUrl = `/quiz/cruise/${this.props.match.params.personality}`;

    const fullUrl = process.env.NODE_ENV === 'production' ? baseUrl : `http://localhost:5000${baseUrl}`

    try {
      const response = await axios.get(fullUrl);
      
      if(response.data[0] && response.data[0].availableCruises[0]) {
       
        this.setState({ cruises: response.data[0].availableCruises[0] })
      }
    } catch (error){
      console.log(error);
      throw error;
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const availableCruises = Object.keys(this.state.cruises).map((key, index) => {
      return this.state.cruises[key].map(cruise => {
        return cruise
      })
    });

    if(availableCruises.length > 0) {
      const formattedCruises = availableCruises.reduce(item => {
        return item
      })

      console.log(formattedCruises)
    }

    
    
    if(this.state.loading) {
      return <div>Loading Your results...</div>
    }

    return (
      <div style={{ backgroundColor: '#fff'}}>
        <div>
          {
            
          }
        </div>
      </div>
    )
  }
}

export default Cruise;