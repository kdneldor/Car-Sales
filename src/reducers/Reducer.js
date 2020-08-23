const initialState = {
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

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {};
    case "REMOVE_FEATURE":
      return {};
    default:
      return state;
  }
};
