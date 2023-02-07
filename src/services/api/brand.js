import axios from 'axios';
import endPoints from './index';
import Cookie from 'js-cookie';

const jwt = Cookie.get('token');

const addBrand = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.post(endPoints.brands.createBrand, body, config);
  return response.data;
};

const updateBrand = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.put(endPoints.brands.editBrand(id), body, config);
  return response.data;
};

const deleteBrand = async (id) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.delete(endPoints.brands.deleteBrand(id), config);
  return response.data;
}

export { addBrand, deleteBrand, updateBrand };
