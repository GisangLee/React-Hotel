import React from "react";
import axios from "axios";
import Hotels from "./hotel";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    hotels: [],
  };
  getHotels = async () => {
    const {
      data: { results },
    } = await axios.get(
      "http://www.gimhae.go.kr/openapi/tour/lodging.do?page=4&pageunit=10"
    );
    this.setState({ hotels: results, isLoading: false });

    // 데이터 잘 왔나 확인
    console.log(this.state);
  };
  componentDidMount() {
    this.getHotels();
  }

  render() {
    const { isLoading, hotels } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="hotels">
            {hotels.map((hotel) => (
              <Hotels
                key={hotel.id}
                id={hotel.id}
                address={hotel.address}
                category={hotel.category}
                name={hotel.name}
                information={hotel.information}
                contact={hotel.contact}
                images={hotel.image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
