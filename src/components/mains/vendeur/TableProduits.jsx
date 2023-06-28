import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { BsTrash, BsPencil } from "react-icons/bs";
import "../../../index.css";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "photo", headerName: "Photo", width: 230 },
  { field: "description", headerName: "Description", width: 260 },
  { field: "quantity", headerName: "Quantity", width: 220 },
  { field: "statut", headerName: "Statut", width: 230 },
  { field: "date", headerName: "Date d'entrée", width: 230 },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => (
      <div>
        <DropdownButton id="dropdown-basic-button" title="Actions">
          <Dropdown.Item onClick={() => handleEdit(params)}>
            Edit <BsPencil />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleDelete(params)}>
            Delete <BsTrash />
          </Dropdown.Item>
        </DropdownButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    photo: "o",
    description: "Orange",
    quantity: 35,
    statut: "disponible",
    date: "06-06-2023",
    action: "",
  },
  {
    id: 2,
    photo: "o",
    description: "Ordinateur",
    quantity: 25,
    statut: "disponible",
    date: "08-06-2023",
    action: "",
  },
  {
    id: 3,
    photo: "o",
    description: "Modem",
    quantity: 35,
    statut: "non disponible",
    date: "08-07-2023",
    action: "",
  },
  {
    id: 4,
    photo: "o",
    description: "Modem",
    quantity: 35,
    statut: "non disponible",
    date: "08-07-2023",
    action: "",
  },
  {
    id: 5,
    photo: "o",
    description: "Modem",
    quantity: 35,
    statut: "non disponible",
    date: "08-07-2023",
    action: "",
  },
  {
    id: 6,
    photo: "o",
    description: "Modem",
    quantity: 35,
    statut: "disponible",
    date: "08-07-2023",
    action: "",
  },
];
const handleEdit = (params) => {
  // Handle edit action
  console.log("Edit", params);
};

const handleDelete = (params) => {
  // Handle delete action
  console.log("Delete", params);
};

export default function DataTable() {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerClassName: "custom-header",
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
