import axios from 'axios';
import endPoints from './index';
import Cookie from 'js-cookie';

const jwt = Cookie.get('token');

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.post(endPoints.products.createProduct, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.delete(endPoints.products.deleteProduct(id), config);
  return response.data;
}

export { addProduct, deleteProduct };
