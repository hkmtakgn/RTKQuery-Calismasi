import { useEffect, useState } from "react"
import { axiosCatApi } from "./axiosApi";



export default function useCategoryAxiosApi (catName) {
    
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState (false);
  const [error,setError] = useState ();

  const getApiData = async () => {
    try {
      const response = await axiosCatApi(`/images/search?limit=10&breeds_ids=${catName}`)
      const responseData = await response?.data
      setData(responseData)
      setIsLoading(false)
      
    }
    catch(err) {
      setIsError(true)
      setError("veri yüklenmedi!")
      throw new Error(err)
      
    }
  }

  useEffect(() => {
    getApiData()
  },[])

return [isError,isLoading,data,error]


};

