import React, { useState, useEffect } from "react";

function HelloWorld() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost/api/hello");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.text();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data}</div>;
}

export default HelloWorld;
