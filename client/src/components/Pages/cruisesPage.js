import React from "react";
import axios from "axios";
import "../Cruises/cruises.css";

class Cruise extends React.Component {
  state = {
    cruises: {},
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const baseUrl = `/quiz/cruise/${this.props.match.params.personality.toLowerCase()}`;

    const url =
      process.env.NODE_ENV === "production"
        ? baseUrl
        : `http://localhost:5000${baseUrl}`;

    try {
      const response = await axios.get(url);

      if (response.data[0] && response.data[0].availableCruises[0]) {
        this.setState({ cruises: response.data[0].availableCruises[0] });
      }
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const results = [];
    const availableCruises = {};

    // for each coutnry, lets map the available cruises to that country
    for (let country in this.state.cruises) {
      availableCruises[`${country}`] = this.state.cruises[country];
    }

    // for each country
    for (let key in availableCruises) {
      // lets loop over the available cruises
      availableCruises[key].map(ac => {
        // and for each cruise line inside the list of available cruises
        for (let cruiseLineName in ac) {
          // grab the array of cruises
          const listOfCruises = ac[cruiseLineName];

          // map over the cruises and set data inside
          listOfCruises.map(cruise => {
            cruise.cruiseLine = cruiseLineName;
            cruise.country = key;
            // push the formatted data inside results
            return results.push(cruise);
          });
        }
        return null;
      });
    }

    if (this.state.loading) {
      return <div>Loading Your results...</div>;
    }

    return (
      <div className="SetSail">
        <h2>Trips-Ahoy!</h2>
        <h2>Let's Set Sail!</h2>

        <div className="flexCenter">
          {results.map((result, index) => (
            <div className="cruisesPage" key={`${result.cruiseLine}-${index}`}>
              <h1 className="countryCenter">{result.country}</h1>
              <h2>{result.cruiseLine} Cruise Line</h2>

              <p>
                Leaving: {result.leaving} on {result.date}
              </p>
              <p>We will be visiting:</p>
              <ul>
                {result.visiting.map((place, index) => (
                  <li key={`${place}-${index}`}>{place}</li>
                ))}
              </ul>
              <p>Pricing for Cruise:</p>

              <ul>
                {result.pricing &&
                  Array.isArray(result.pricing) &&
                  result.pricing.map((pricing, index) => (
                    <li key={`${pricing}-${index}`}>{pricing}</li>
                  ))}
              </ul>
              <a href={result.link} target="_blank" rel="noopener noreferrer">
                {" "}
                Click to Book this Cruise Now!
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cruise;
