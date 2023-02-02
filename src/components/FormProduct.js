import { useRef } from 'react';
import { addProduct } from '../services/api/product';

export default function FormProduct({ setOpen, setAlert, product }) {
  const fromRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(fromRef.current);
    const data = {
      name: formData.get('product-name'),
      description: formData.get('description'),
      price: parseInt(formData.get('price')),
      stock: parseInt(formData.get('stock')),
      image: formData.get('image-url'),
      brandId: parseInt(formData.get('brand')),
      categoriesId: [formData.get('categories')],
    };
    addProduct(data)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product added successfully',
          type: 'success',
          autoClose: false,
        });
        setOpen(false);
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
        setOpen(false);
      });
  };


  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Create a Product</h3>
              <p className="mt-1 text-sm text-gray-600">Be sure to be logged in to create a new product</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form ref={fromRef} onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                        Product Name
                      </label>
                      <input
                        defaultValue={product?.name}
                        type="text"
                        name="product-name"
                        id="product-name"
                        className=" bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 ">
                        Price
                      </label>
                      <input
                        defaultValue={product?.price}
                        type="text"
                        name="price"
                        id="price"
                        className="mt-50 block w-full rounded-md border-gray-400 bg-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        defaultValue={product?.description}
                        type="text"
                        name="description"
                        id="description"
                        className="bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">
                        Image URL
                      </label>
                      <input
                        defaultValue={product?.image}
                        type="text"
                        name="image-url"
                        id="image-url"
                        className="bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                        Stock
                      </label>
                      <input
                        defaultValue={product?.stock}
                        type="text"
                        name="stock"
                        id="stock"
                        className="bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand
                      </label>
                      <input
                        defaultValue={product?.brand?.id}
                        type="text"
                        name="brand"
                        id="brand"
                        className="bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                        Categories
                      </label>
                      <input
                        defaultValue = {product?.categoriesId}
                        type="text"
                        name="categories"
                        id="categories"
                        className="bg-gray-300 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
