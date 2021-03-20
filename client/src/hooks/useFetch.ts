import * as React from 'react';

interface FetchResponseData<T> {
  response: Response<T>;
  error: string | null;
  loading: boolean;
}

interface Response<T> {
  data: T | null;
}

const DEFAULT_RESPONSE_STATE = {
  data: null
};

/**
 * @param endpoint {String} endpoint to fetch data from.
 */
export function useFetch<T>(endpoint: string): FetchResponseData<T> {
  const [response, setResponse] = React.useState<Response<T>>(DEFAULT_RESPONSE_STATE);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let didCancelFetch = false;

    // Resets the loader and errors on subsequent calls
    setError(null);
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        const responseJson = await res.json();

        if (!didCancelFetch) {
          const updatedResponse: Response<T> = { data: responseJson }

          setResponse(updatedResponse);
        }
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      didCancelFetch = true;
    };
  }, [endpoint]);

  return { response, error, loading };
}