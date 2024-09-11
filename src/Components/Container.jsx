import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="card" style={{width: "60%", marginLeft:'auto', marginRight:'auto', backgroundColor:'lightgrey'}}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Container;
