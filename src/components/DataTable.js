import React from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    name: "Simar",
    age: 19,
    school: "Junior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 2,
    name: "Yug",
    age: 19,
    school: "Junior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 3,
    name: "Aditya",
    age: 25,
    school: "Seconadry",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 4,
    name: "rohan",
    age: 25,
    school: "Senior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 5,
    name: "Avish",
    age: 25,
    school: "Seconadry",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 6,
    name: "Sam",
    age: 25,
    school: "Junior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 7,
    name: "Parth",
    age: 25,
    school: "seconday",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 8,
    name: "Aman",
    age: 25,
    school: "Junior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
  {
    id: 9,
    name: "Ayush",
    age: 25,
    school: "Senior",
    class: 5,
    divison: "A",
    stat: "Active",
  },
];

const TableStyles = styled.div`
  tr:nth-child(odd) {
    background-color: #ffe5b4;
  }

  table {
    border: 1px solid #e9e9e9;
    width: 100%;
    height: 100%;
  }
  th {
    border-bottom: 1px solid black;
    background-color: #930606;
    color: #fff;
    font-weight: 400;
    padding: 1rem 5px;
    padding-left: 2rem;
    font-size: 20px;
  }
  td {
    padding: 0.5rem;
    padding-left: 2rem;
    color: #000;
  }
`;

export default function DataTable() {
  return (
    <TableStyles>
      <table>
        <tr>
          <th>ID'V</th>
          <th>Name</th>
          <th>Age</th>
          <th>School</th>
          <th>Class</th>
          <th>Divison</th>
          <th>Status</th>
          <th></th>
          <th></th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.school}</td>
              <td>{val.class}</td>
              <td>{val.divison}</td>
              <td>{val.stat}</td>
              <td>{val.Edit}</td>
              <td>
                <a href="/">Edit</a> <a href="/">Delete</a>
              </td>
            </tr>
          );
        })}
      </table>
    </TableStyles>
  );
}
