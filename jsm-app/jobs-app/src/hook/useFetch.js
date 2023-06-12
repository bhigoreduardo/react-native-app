import axios from "axios";
import { useEffect, useState } from "react";
// import { REACT_APP_RAPID_API_URL } from '@env'

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_RAPID_API_URL}/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
    params: { ...query },
    // query: 'Python developer in Texas, USA', page: '1', num_pages: '1'
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;
