import React, { useState } from "react";

const ImageRadioButton = ({ options, onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelection = (value) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <div className="image-radio-group">
      {options.map((option) => (
        <label key={option.value} className="image-radio-label">
          <input
            type="radio"
            name="imageRadio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleSelection(option.value)}
            style={{ display: "none" }}
          />
          <img
            src={option.imgSrc}
            alt={option.altText}
            className={`image-radio ${
              selectedValue === option.value ? "selected" : ""
            }`}
          />
        </label>
      ))}
    </div>
  );
};

// Usage
const options = [
  { value: "option1", imgSrc: "/path/to/image1.jpg", altText: "Option 1" },
  { value: "option2", imgSrc: "/path/to/image2.jpg", altText: "Option 2" },
];

const App = () => {
  const handleValueChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <ImageRadioButton options={options} onValueChange={handleValueChange} />
    </div>
  );
};

export default App;
