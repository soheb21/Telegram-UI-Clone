import React, { useEffect } from 'react'
import Side from '../components/Side'
import useFetch from '../hook/useFetch';
import Spinner from '../utils/Spinner';

const Home = () => {
  const { data, loading, error } = useFetch('https://devapi.beyondchats.com/api/get_all_chats?page=2');

  if (loading) return <Spinner />
  if (error) return <p>{error?.message}</p>
  return (
    <>
      <div className="flex h-screen bg-hero-pattern dark:bg-hero-dark-pattern ">
        <Side users={data} />
      </div>
    </>
  )
}

export default Home