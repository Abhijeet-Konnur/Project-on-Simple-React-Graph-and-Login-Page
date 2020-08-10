import React, { Component } from 'react';
import Lastpage from './Lastpage';
//import Button from './Button'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            array: [],
            firstButton: false
        }
    }

    componentDidMount() {
        var url = 'https://reqres.in/api/users?page=1'
        fetch(url)
            .then(resp => resp.json())
            .then((result) => {
                this.setState({
                    array: result.data
                })
            })
    }

    toggle = () => {
        this.setState({ firstButton: !this.state.firstButton })
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary ">
                    <div className='navbar-brand'>
                        <div className='col-6'>  Welcome  {this.props.location.state.detail}</div>
                    </div>

                </nav>
                <button type="submit" className="btn btn-primary mr-3" onClick={this.toggle} id='home' >
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Previous</button>
                <button type="submit" className="btn btn-primary" onClick={this.toggle} id='lastpage' >Next
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </button>

                {this.state.firstButton === false ?
                    <>
                        {this.state.array.map((data, index) => (

                            <div className="container mt-4 shadow p-3 mb-5 bg-white rounded" key={index}>
                                <div className="card-body w-80" style={{ border: '0.5px solid black' }}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img
                                                src={data.avatar}
                                                className="rounded-circle"
                                                alt="Cinque Terre"
                                                width="100"
                                                height="100"
                                            ></img>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <h4 className="card-title text-left text-primary row">
                                                <h4 style={{ color: 'black' }}> Name : &nbsp;</h4>  {data.first_name}  {data.last_name}
                                            </h4>

                                            <h4 className="card-title text-left text-primary row">
                                                <h4 style={{ color: 'black' }}>Email ID :  &nbsp;</h4>    {data.email}
                                            </h4> */}
                                            <div className="card-title text-left text-primary row">
                                                <label  className="h4 mr-3" style={{ color: 'black' }}>
                                                    Name :  </label>
                                                <label  className="h4" >
                                                    {data.first_name}  {data.last_name}
                                                </label>
                                            </div>
                                            <div className="card-title text-left text-primary row">
                                                <label  className="h4 mr-3" style={{ color: 'black' }}>
                                                    Email Id : </label>
                                                <label  className="h4" >
                                                    {data.email}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}</>
                    : <> <Lastpage /> </>

                }
            </div>
        )
    }
}

export default Home