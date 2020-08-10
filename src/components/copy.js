import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Lastpage extends Component {

  constructor() {
    super()
    this.state = {
      lastArray: []
    }
  }

  componentDidMount() {
    var url = 'https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1'
    fetch(url)
      .then(resp => resp.json())
      .then((result) =>
        this.setState({ lastArray: result.slice(0,10) }
          , () => console.log('>>', result)
        )
      )
  }

  render() {
    console.log(this.state.lastArray)
    return (
      <div>
        {this.state.lastArray.length > 0 &&
          <Line data={}/>
          // <LineChart width={1000} height={500} data={this.state.lastArray}>
          //   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          //   <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          //   <XAxis dataKey="lastUpdatedAtApify" />
          //   <YAxis />
          // </LineChart>
        }
      </div>
    );
  }
}

export default Lastpage