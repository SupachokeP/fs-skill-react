import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = ({ url, initialData = null, setData, deps = [] }) => {
  const [data, _setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      console.log("DataFetcher will unmount");
      // Cleanup logic here if needed
    };
  }, deps);

  return null; // Functional component doesn't need to render anything
};

export default DataFetcher;
