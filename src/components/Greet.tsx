import React from "react";

type GreetProps = {
  name: string;
  message?: string;
};

const Greet: React.FC<GreetProps> = ({ name, message = "Hello" }) => {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h4 className="card-title text-primary">
            {message}, {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Greet;
