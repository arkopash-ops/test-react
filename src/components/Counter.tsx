import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container mt-5 text-center">
            <div className="card p-4 shadow-sm">
                <h3 className="mb-3">Counter</h3>

                <div className="d-flex justify-content-center gap-2">
                    <button
                        aria-label="decrement"
                        className="btn btn-danger"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>

                    <h1 className="mb-0">{count}</h1>

                    <button
                        aria-label="increment"
                        className="btn btn-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
