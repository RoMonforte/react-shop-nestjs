import axios from 'axios';
import endPoints from './index';
import Cookie from 'js-cookie';

const jwt = Cookie.get('token');

const addCategory = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.post(endPoints.categories.createCategory, body, config);
  return response.data;
};

const deleteCategory = async (id) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const response = await axios.delete(endPoints.categories.deleteCategory(id), config);
  return response.data;
}

export { addCategory, deleteCategory };
