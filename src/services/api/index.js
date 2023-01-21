const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/profile/my-orders`,
  },
  products: {
    getProducts: `${API}/products`,
    getSingleProduct: (id) => `${API}/products/${id}`,
    createProduct: `${API}/products`,
    editProduct: (id) => `${API}/products/${id}`,
    deleteProduct: (id) => `${API}/products/${id}`,

  }
};

export default endPoints;
