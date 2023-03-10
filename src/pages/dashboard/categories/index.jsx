import Link from 'next/link';
import endPoints from '../../../services/api';
import Modal from '../../../common/Modal';
import { useState, useEffect } from 'react';
import FormCategory from '../../../components/FormCategory'; 
import DashboardHeader from '../../../components/DashboardHeader';
import axios from 'axios';
import useAlert from '../../../hooks/useAlert';
import Alert from '../../../common/Alert';
import { deleteCategory } from '../../../services/api/category';
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function Categories() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get(endPoints.categories.getCategories(500,0));
      setCategories(response.data);
    }
    try { 
      getCategories();
    } catch (error) {
      console.log(error);
    }
  }, [alert]);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setAlert({
        active: true,
        message: 'Delete product successfully',
        type: 'error',
        autoclose: true,
      });
    });
  };

  return (
    <>
    <DashboardHeader />
    <Alert alert={alert} handleClose={toggleAlert} />
      <div className="pt-6 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <span className="pb-6 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setOpen(true)}
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                </svg>
                Create category
              </button>
            </span>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categories in the e-commerce
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories?.map((category) => (
                    <tr key={`category-item-${category.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={category.image} alt="image" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{category.name}</div>
                            <div className="text-sm text-gray-500">{category.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/dashboard/categories/${category.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <XCircleIcon className="flex=shrink-0 h6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(category.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormCategory setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  );
}
