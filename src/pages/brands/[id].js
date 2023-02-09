import FormBrand from '../../../components/FromBrand';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '../../../services/api';

export default function Edit() {
  const [brand, setBrand] = useState({});
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;
    async function getBrand() {
      const response = await axios.get(endPoints.brands.getSingleBrand(id));
      setBrand(response.data);
    }
    getBrand();
  }, [router?.isReady]);
  return <FormBrand brand={brand} />;
}
