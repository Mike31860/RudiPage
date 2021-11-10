import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import  Database  from '../DataBase.json';
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function loadServerRows(commodityFilterValue, ColumnFilter) {
  const serverRows = Database;
  console.log(ColumnFilter)

  return new Promise((resolve) => {
    setTimeout(() => {
      if (!commodityFilterValue) {

        resolve(serverRows);
        return;
      }
      if(ColumnFilter==="Author"){
       
        resolve(
          serverRows.filter(
           
            (row) => row.Author.toLowerCase().indexOf(commodityFilterValue.toLowerCase())!== -1
          ),
        );
      }
      else if(ColumnFilter==="Title"){
        console.log(commodityFilterValue);
        resolve(
          serverRows.filter(
            (row) => row.Title.toLowerCase().indexOf(commodityFilterValue.toLowerCase())!== -1,
          ),
        );
      }
      else if(ColumnFilter==="JournalProceedings"){

        resolve(
          serverRows.filter(
            (row) => row.JournalProceedings.toLowerCase().indexOf(commodityFilterValue.toLowerCase())!== -1,
          ),
        );

      }
      else if(ColumnFilter==="Year"){
        resolve(
          serverRows.filter(
            (row) => row.Year==commodityFilterValue,
          ),
        );

      }
      else if(ColumnFilter==="Reftype"){
        resolve(
          serverRows.filter(
            (row) => row.Reftype==commodityFilterValue,
          ),
        );

      }
    
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function ServerFilterGrid() {


  const [columns] = React.useState([{ field: 'Author', width: 250 }, { field: 'Title', width: 250},{ field: 'Year', width: 200}, { field: 'JournalProceedings', width: 250}
  ,{ field: 'Reftype', width: 250 }, { field: 'DOI', width: 250, renderCell: (params) => (  <Link href={`${params.value}`}>Link</Link>) },
  ]);

  const [rows, setRows] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState();
  const [filterValueColum, setFilterValueColum] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const onFilterChange = React.useCallback((filterModel) => {
    console.log(filterModel)
    setFilterValue(filterModel.items[0].value);
    setFilterValueColum(filterModel.items[0].columnField);
  }, []);

 

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(filterValue, filterValueColum);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [filterValue]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        loading={loading}
      />
    </div>
  );
}
