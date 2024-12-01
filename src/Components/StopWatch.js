import { useEffect, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      console.log("Count increased.");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>{count}</div>;
};

export { StopWatch };
