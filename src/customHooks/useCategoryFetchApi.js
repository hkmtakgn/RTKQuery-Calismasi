//https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME

const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

import { useEffect, useState } from "react";



export default function useCategoryFetchApi(catName) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const fetchInfo = {
    headers:{
      "x-api-key":VITE_CAT_API_KEY
    }
  }


  const getCatApiData = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catName}`,fetchInfo)
    const resData = await response.json()
    if (!response.ok) {
      setIsError(true)
      setError("Veri yüklenmedi")
      throw new Error("Veri alınamadı")
    }
    setIsLoading(false)
    setData(resData)
  }

  useEffect(() => {
    setTimeout(getCatApiData, 1500)
  }, [])

  return [isError, isLoading, data, error]

};

