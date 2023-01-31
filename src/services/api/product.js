import axios from 'axios';
import endPoints from './index';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOjMsImlhdCI6MTY3NTEzMTE4NiwiZXhwIjoxNjc1OTk1MTg2fQ.vj4pLDmnUo0Cda-84cTBlMYMMC09bElzZaLHM7j7UDk',
    },
  };
  const response = await axios.post(endPoints.products.createProduct, body, config);
  return response.data;
};

export { addProduct };
