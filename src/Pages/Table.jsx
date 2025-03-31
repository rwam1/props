import React, { useState } from "react";

const Table = () => {
  const data = [
    { id: 1, name: "nik", role: "react dev" },
    { id: 2, name: "babu", role: "js dev" },
    { id: 3, name: "amit", role: "fs dev" }, { id:4, name: "farid", role: "app dev" },
  ];
  const [text, setText] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  let filterData = data.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  if (sortField) {
    filterData.sort((a, b) => {
      let valOfA = a[sortField].toLowerCase();
      let valOfB = b[sortField].toLowerCase();
      return sortOrder === "asc"
        ? valOfA.localeCompare(valOfB)
        : valOfB.localeCompare(valOfA);
    });
  }
  const handleSort = (field) => {
    setSortOrder( sortField===field && sortOrder === "asc" ? "desc" : "asc");
    setSortField(field);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(e) => setText(e.target.value)}
        id=""
      />
      <table border={"1"} >
        <thead>
          <tr>
            <th>id</th>
            <th onClick={() => handleSort("name")}>name</th>
            <th onClick={() => handleSort("role")}>role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {filterData.length > 0 ? (
              filterData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td> <td>{item.role}</td>
                  </tr>
                );
              })
            ) : (
              <td>
                <tr>"no data"</tr>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
