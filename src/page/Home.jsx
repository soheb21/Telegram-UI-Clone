import React from 'react'
import Side from '../components/Side'
import useFetch from '../hook/useFetch';
import Spinner from '../utils/Spinner';

const Home = () => {
  const { data, loading, error } = useFetch('https://devapi.beyondchats.com/api/get_all_chats?page=2');

  if (loading) return <Spinner />
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex h-screen">
        <Side users={data} />
      </div>
    </>
  )
}

export default Home