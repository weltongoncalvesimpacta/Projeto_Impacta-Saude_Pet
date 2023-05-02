import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    raca: props.raca,
    idade: props.idade,
    sexo: props.sexo,
  });

    const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPet = () => {
    Axios.put("http://localhost:3001/edit", {
        id: editValues.id,
        nome: editValues.nome,
        raca: editValues.raca,
        idade: editValues.idade,
        sexo: editValues.sexo,
    });
    handleClose();
  };

  const handleDeletePet = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    handleClose();
  };

  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };


  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome do pet"
            defaultValue={props.nome}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="raca"
            label="Raça"
            defaultValue={props.raca}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="idade"
            label="Idade"
            defaultValue={props.idade}
            onChange={handleChangeValues}
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="sexo"
            label="Sexo"
            defaultValue={props.sexo}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletePet} color="primary">
            Excluir
          </Button>
          <Button onClick={handleEditPet} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}