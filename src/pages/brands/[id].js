import BrandFilter from '../../components/BrandFilter';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BrandForId() {
  const [brandId, setBrandId] = useState();
  const router = useRouter();
  useEffect(() => {
    const {id} = router.query;
    if (!router.isReady) return;
    async function setId(Id) {
      const response = await Id;
      setBrandId(response.toString())
    }
    setId(id);

  }, [router?.isReady]);

  if(!brandId) {
    return <div> Loading ...</div>
  } 
  return <BrandFilter brandId={brandId} />;
}
