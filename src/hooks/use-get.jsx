import { useEffect, useState, useCallback } from "react"

const useGetApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = useCallback(async() => {
     await fetch(url)
    .then(response => {
       return response.json()
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data }
};

export default useGetApi;

