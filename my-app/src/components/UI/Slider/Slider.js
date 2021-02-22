import React from 'react';

const Slider = (props) =>
  props.imgs.length > 0 ? (
    <div className="flex flex-col items-center mb-8">
      <div className="flex overflow-x-scroll w-1/2">
        {props.imgs?.map((url, index) => (
          <img
            className="w-100 max-h-80 object-cover mr-3 rounded-lg"
            key={index}
            src={url}
          />
        ))}
      </div>
    </div>
  ) : null;

export default Slider;
