import React, { useState } from 'react';
import { SingleColorPicker } from './SingleColorPicker';

export const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div
            className="colorPicker"
            style={{
              margin: '0 auto',
              borderRadius: '40px',
              width: '200px',
              height: '200px',
              backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            }}
          ></div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="d-flex flex-row singlePickers">
            <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
            <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
            <SingleColorPicker color="b" value={bValue} onChange={setBValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
