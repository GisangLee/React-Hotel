import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    hotels: [],
  };
  getHotels = async () => {
    const {
      data: { results },
    } = await axios.get(
      "http://www.gimhae.go.kr/openapi/tour/lodging.do?page=5&pageunit=10"
    );
    this.setState({ hotels: results, isLoading: false });

    // 데이터 잘 왔나 확인
    console.log(this.state);
  };
  componentDidMount() {
    this.getHotels();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are Ready"}</div>;
  }
}
export default App;
