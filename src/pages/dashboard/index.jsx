import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    href: '/dashboard/products',
    name: 'Products',
    description: 'Here you can administrate all the products. Be sure to be logged in to have full acess.',
    icon: GlobeAltIcon,
  },
  {
    href: '/dashboard/categories',
    name: 'Categories',
    description: 'Here you can administrate all the categories. Be sure to be logged in to have full acess.',
    icon: ScaleIcon,
  },
  {
    href: '/dashboard/brands',
    name: 'Brands',
    description: 'Here you can administrate all the brands. Be sure to be logged in to have full acess.',
    icon: BoltIcon,
  },
  {
    href: '/dashboard/users',
    name: 'Users',
    description: 'Here you can administrate all the users. Be sure to be logged in to have full acess.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Dashboard main page</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Please select what you want to see data of</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">This is the administration page of the fake e-commerce of RmC.</p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <a href={feature.href}>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
