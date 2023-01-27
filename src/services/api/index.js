const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/profile/my-orders`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
    getSingleProduct: (id) => `${API}/products/${id}`,
    createProduct: `${API}/products`,
    editProduct: (id) => `${API}/products/${id}`,
    deleteProduct: (id) => `${API}/products/${id}`,
  },
  categories: {
    getCategories: `${API}/categories`,
    getSingleCategory: (id) => `${API}/categories/${id}`,
    createCategory: `${API}/categories`,
    editCategory: (id) => `${API}/categories/${id}`,
    deleteCategory: (id) => `${API}/categories/${id}`,
  },
  users: {
    getSingleUser: (id) => `${API}/users/${id}`,
  }
};

export default endPoints;
