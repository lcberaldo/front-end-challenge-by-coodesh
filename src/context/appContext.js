import React, { useState, useEffect, useCallback, createContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import api from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const user = users.find((e) => e.id.value === userId);

  const loadUsers = useCallback(async (params) => {
    let query = params.id
      ? `id=${params.id}`
      : `page=${params.page}&results=50`;

    try {
      const response = await api.get(`/?${query}&seed=123`);
      const results = response.data.results.filter((e) => !!e.id.value);

      setUsers((users) => users.concat(results));
      setFilteredList((filteredList) => filteredList.concat(results));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    loadUsers({ page });
  }, [page]);

  useEffect(() => {
    if (!user && users.length > 0 && userId) {
      loadUsers({ id: userId });
    }
  }, [users]);

  const loadMoreUsers = () => {
    setPage((p) => p + 1);
  };

  const searchUser = (e) => {
    e.preventDefault();

    let searchValue = e.target.value.toLowerCase();

    setFilteredList(
      users.filter((user) => {
        let name = user.name.first.toLowerCase();
        let secondName = user.name.last.toLowerCase();
        let nat = user.nat.toLowerCase();

        if (
          name.includes(searchValue) ||
          secondName.includes(searchValue) ||
          nat.includes(searchValue)
        ) {
          return user;
        }
      })
    );
  };

  const setUserId = (id) => {
    console.log(id);
    setSearchParams(id ? { id } : {});
  };

  const handleClose = () => {
    setUserId();
  };

  const handleShow = (id) => {
    setUserId(id);
  };

  const filterGender = (gender) => {
    if (gender) {
      setFilteredList(
        users.filter((user) => {
          return user.gender === gender;
        })
      );
    } else {
      setFilteredList(users);
    }
  };

  return (
    <DataContext.Provider
      value={{
        filteredList,
        user,
        loadMoreUsers,
        searchUser,
        handleClose,
        handleShow,
        filterGender,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
