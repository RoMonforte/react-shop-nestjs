import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchData() {
    const response = await axios(endpoint);
    setData(response.data), [];
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
