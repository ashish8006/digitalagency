import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setLoading, setError } from '../features/postsSlice';
import { useEffect } from 'react';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.org/posts');
  const data = await response.json();
  return data;
};

const usePostData = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, isStale, isFetching } = useQuery('apiData', fetchData, {
    cacheTime: 60000,
    staleTime: 30000,
  });

  const postsState = useSelector((state) => state.posts);

  useEffect(() => {
    if (data) {
      dispatch(setPosts(data));
    }
  }, [data, dispatch]);

  if (isLoading || isFetching) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }

  if (error) {
    dispatch(setError(error.message));
  } else {
    dispatch(setError(null));
  }

  return { data: postsState.data, isLoading: postsState.loading, error: postsState.error, isStale, isFetching };
};

export default usePostData;
