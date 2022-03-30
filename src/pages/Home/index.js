import React, { useContext } from "react";
import * as dayjs from "dayjs";

import { DataContext } from "../../context/appContext";
import { Dropdown } from "react-bootstrap";

import logoCompany from "../../assets/logo.png";
import { Header, List } from "./styles";
import { FaUser } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

import ModalUser from "../../components/ModalUser";

const Home = () => {
  const {
    filteredList,
    loadMoreUsers,
    searchUser,
    handleClose,
    handleShow,
    filterGender,
  } = useContext(DataContext);

  return (
    <>
      <Header className="d-flex justify-content-between align-items-center">
        <div className="logo-btn d-flex align-items-center">
          <img src={logoCompany} width={40} alt="" />
          <span>Pharma Inc</span>
        </div>

        <div className="user">
          <FaUser size={20} />
        </div>
      </Header>

      <List>
        <div className="list-header">
          <p>
            Seja bem vindo ao Pacient Information, aqui você tem acesso a
            informações de diversos pacientes da API Random User.
          </p>
          <p>
            Para facilitar, utilize o campo de busca abaixo e faça sua pesquisa!
          </p>

          <form onChange={searchUser}>
            <input placeholder="Searching" />
          </form>
        </div>

        <table>
          <thead>
            <tr className="titles">
              <th className="name">Name</th>
              <th>
                <Dropdown>
                  <Dropdown.Toggle>Gender</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => filterGender()}>
                      Both
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterGender("male")}>
                      Male
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterGender("female")}>
                      Female
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th>Birth</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredList?.map((user, index) => (
              <tr className="pacients" key={index}>
                <td className="name">
                  {user.name.first + " " + user.name.last}
                </td>
                <td>{user.gender}</td>
                <td>{dayjs(user.dob.date).format("DD/MM/YYYY")}</td>
                <td>
                  <button onClick={() => handleShow(user.id.value)}>
                    <MdInfo size={30} />
                  </button>
                </td>
              </tr>
            ))}

            <ModalUser onClose={handleClose} />
          </tbody>
        </table>

        <button className="load-more" onClick={loadMoreUsers}>
          Load More
        </button>
      </List>
    </>
  );
};

export default Home;
