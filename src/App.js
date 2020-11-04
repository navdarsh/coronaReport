import React from "react";
import "./App.css";
import Body from "./Components/body";
import Head from "./Components/Head.js";
import Total from "./Components/total";
import coronaImg from "./coronav660.jpg";
import { Container, Row, Col } from "react-grid-system";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      stateList: [],
      activeTab: null,
      totalCases: [],
    };
  }

  componentDidMount() {
    // if (this.state.activeTab === 1) {
    let url = "https://api.covid19api.com/countries";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Body -> this.componentDidMount -> result", result);
          this.setState({ stateList: result });
        },
        (error) => console.log("Body -> this.componentDidMount -> error", error)
      );
  }
  // }

  render() {
    const getCountryData = (name) => {
      console.log("MyComponent -> getTotal -> name", name);
      let url = `https://api.covid19api.com/dayone/country/${name}`;
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log("MyComponent -> getTotal -> result", result);
            this.setState({ totalCases: result });
          },
          (error) =>
            console.log("Body -> this.componentDidMount -> error", error)
        );
    };

    var background = {
      height: "100vh",
      width: "100%",
      backgroundImage: `url(${coronaImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    var tabStyle = {
      padding: "2rem",
      background: "black",
      color: "white",
      opacity: 0.4,
      textAlign: "center",
    };

    let data = { title: "CORONAVIRUS" };
    let country = this.state.stateList;
    return (
      <div style={background}>
        <Head data={data} />

        <Container>
          <Row>
            <Col size={4}>
              <div style={tabStyle}>
                {
                  <select
                    placeholder="Total Cases"
                    name="Total"
                    id="total"
                    onChange={(e) => getCountryData(e.target.value)}
                  >
                    {country.map((ele) => {
                      return <option>{ele.Country}</option>;
                    })}
                  </select>
                }
              </div>
            </Col>
            <Col size={4}>
              <div style={tabStyle}>Search</div>
            </Col>
            <Col size={4}>
              <div style={tabStyle}>History</div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col size={4}></Col>
            <Col size={4}>
              <Body
                data={this.state.totalCases[this.state.totalCases.length - 1]}
              />
            </Col>
            <Col size={4}></Col>
          </Row>
        </Container>
      </div>
    );

    // function callback(key) {
    //   this.setState({ activeTab: key });
    // }
  }
}

export default MyComponent;
