import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Lastpage extends Component {

  constructor() {
    super()
    this.state = {
      lastArray: [],
    }
  }

  componentDidMount() {
    var url = 'https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1'
    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        this.setState({ lastArray: result },
        )
      })
  }



  render() {
    return (
      <div>
        {this.state.lastArray === 0?
       ( <>
        <div>
          <h2>Loading</h2>
        </div> 
        </>):(
        <>
        {
          <LineChart width={1400} height={600} data={this.state.lastArray} margin={{ top: 10, right: 20, bottom: 5, left: 5 }}>
            <Line type="default" dataKey="recovered" stroke="green" />
            <Line type="default" dataKey="deaths" stroke="red" />
            <Line type="default" dataKey="totalCases" stroke="blue" />
            <Line type="default" dataKey="activeCases" stroke="orange" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="lastUpdatedAtApify" />
            <YAxis />
          </LineChart>}
      
         
        </>)}
    </div>);
  }
}

export default Lastpage