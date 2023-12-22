import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postCounts, setPostCounts] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postsResponse.json();
        setPosts(postsData);

        const countryResponse = await fetch('http://worldtimeapi.org/api/timezone');
        const countryData = await countryResponse.json();
        setCountries(countryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const counts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    setPostCounts(counts);
  }, [posts]);

  return (
    <DataContext.Provider value={{ users, posts, postCounts, countries }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);