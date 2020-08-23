import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import {connect} from "react-redux"
import { addFeature, removeFeature } from "./actions/Action"

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: "V-6 Engine", price: 1500 },
      { id: 2, name: "Racing Detail Package", price: 1500 },
      { id: 3, name: "Premium Sound System", price: 500 },
      { id: 4, name: "Rear Spoiler", price: 250 },
    ],
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.AddedFeatures
  }
}

const mapDispatchToProps = {addFeature, removeFeature}

export default connect(mapStateToProps, mapDispatchToProps)(App);
