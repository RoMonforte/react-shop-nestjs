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
    getProductsForBrand: (limit, offset, brandId) => `${API}/products?limit=${limit}&offset=${offset}&brandId=${parseInt(brandId)}`,
  },
  categories: {
    getCategories: (limit, offset) => `${API}/categories?limit=${limit}&offset=${offset}`,
    getSingleCategory: (id) => `${API}/categories/${id}`,
    createCategory: `${API}/categories`,
    editCategory: (id) => `${API}/categories/${id}`,
    deleteCategory: (id) => `${API}/categories/${id}`,
  },
  users: {
    getSingleUser: (id) => `${API}/users/${id}`,
  },
  brands: {
    getBrands: (limit, offset) => `${API}/brands?limit=${limit}&offset=${offset}`,
    getSingleBrand: (id) => `${API}/brands/${id}`,
    createBrand: `${API}/brands`,
    editBrand: (id) => `${API}/brands/${id}`,
    deleteBrand: (id) => `${API}/brands/${id}`,
  }
};

export default endPoints;
