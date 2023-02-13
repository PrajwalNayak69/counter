import React, { useState } from "react";

export default function Number() {
    const [count, setCount] = useState(0)
    return (
    <div className="row mt-5">
      <div className="col-sm-3">
        <div className="titl">
            <h1>Counter</h1>
        </div>
        <button type="button" class="btn btn-primary btn-block" onClick={() => count > 0 ? setCount(count-1) : setCount(0)}>
          -
        </button>
        <button type="button" class="btn btn-secondary btn-block">
          {count}
        </button>
        <button type="button" class="btn btn-success btn-block" onClick={() => setCount(count+1)}>
          +
        </button>
      </div>
    </div>
  );
}
