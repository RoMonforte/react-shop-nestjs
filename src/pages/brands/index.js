import endPoints from '../../services/api';
import useFetch from '../../hooks/useFetch';
import Pagination from '../../components/pagination';
import { useState } from 'react';

const PRODUCT_LIMIT = 8;
const PRODUCT_OFFSET = 0;

export default function Brands() {
  const [offset, setOffset] = useState(PRODUCT_OFFSET);
  const brands = useFetch(endPoints.brands.getBrands(PRODUCT_LIMIT, offset));
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Take a look of the brands that we have available in RmC e-commerce</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {brands.map((brand) => (
            <div key={brand.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={brand.image} alt={brand.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="./login.js">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {brand.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination offset={offset} setOffset={setOffset} />
    </div>
  );
}
