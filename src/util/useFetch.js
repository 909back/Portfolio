import React from "react";
import axios from 'axios';

const useFetch = (url) => {
  const [payload, setPayload] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const doFetch = async () => {

    try {

        const { data } = await axios.get(url);

        setPayload(data);
    } catch(err) {
        setError(err);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    // only did mount
    doFetch();
  }, []);

  return {payload, loading, error};
};

export default useFetch;
