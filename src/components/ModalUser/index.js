import React, { useContext } from "react";
import * as dayjs from "dayjs";
import { Button, Modal } from "react-bootstrap";
import { RiCloseCircleFill, RiShareBoxFill } from "react-icons/ri";

import { DataContext } from "../../context/appContext";
import { Container } from "./styles";

const ModalUser = () => {
  const { user, handleClose } = useContext(DataContext);

  return (
    <Modal show={!!user} onHide={handleClose}>
      <Container>
        <img src={user?.picture.large} alt="" />

        <div className="infos">
          <span>
            <b>Nome: </b>
            {user?.name.first + " " + user?.name.last}
          </span>
          <span>
            <b>E-mail: </b>
            {user?.email}
          </span>
          <span>
            <b>Gênero: </b>
            {user?.gender}
          </span>
          <span>
            <b>Data de Nasc: </b>
            {dayjs(user?.dob.date).format("DD/MM/YYYY")}
          </span>
          <span>
            <b>Telefone: </b>
            {user?.phone}
          </span>
          <span>
            <b>Nacionalidade: </b>
            {user?.nat}
          </span>
          <span>
            <b>ID: </b>
            {user?.id.value}
          </span>

          <a className="share" target="_blank" href={`/?id=${user?.id.value}`}>
            Compartilhar
            <RiShareBoxFill />
          </a>
        </div>

        <Button className="btn" onClick={handleClose}>
          <RiCloseCircleFill size={30} />
        </Button>
      </Container>
    </Modal>
  );
};

export default ModalUser;
