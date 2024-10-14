import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Chance from 'chance';
const chance = new Chance(42);

function createData(id) {
  return {
    id,
    codigoCurso: chance.string({ length: 5, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890' }),
    nombreCurso: `Curso ${id + 1}`,
    totalActa: chance.integer({ min: 20, max: 100 }),
    totalAprobados: chance.integer({ min: 10, max: 80 }),
    totalDesaprobados: chance.integer({ min: 0, max: 20 }),
    cuposApertura: chance.integer({ min: 10, max: 50 }),
  };
}

const columns = [
  { label: 'Código del Curso', dataKey: 'codigoCurso' },
  { label: 'Nombre del Curso', dataKey: 'nombreCurso' },
  { label: 'Total en Acta', dataKey: 'totalActa', numeric: true },
  { label: 'Total Aprobados', dataKey: 'totalAprobados', numeric: true },
  { label: 'Total Desaprobados', dataKey: 'totalDesaprobados', numeric: true },
  { label: 'Cupos con los que se Apertura', dataKey: 'cuposApertura', numeric: true },
];

const rows = Array.from({ length: 50 }, (_, index) => createData(index));

export default function Asignacion() {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.codigoCurso.toLowerCase().includes(filterText.toLowerCase()) ||
    row.nombreCurso.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 2,
        height: '100vh',
      }}
    >
      <TextField
        label="Buscar curso"
        variant="outlined"
        value={filterText}
        onChange={handleFilterChange}
        sx={{ marginBottom: 2, width: '300px' }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.dataKey}
                  align="center"
                  sx={{
                    backgroundColor: '#002855',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '14px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell
                    key={column.dataKey}
                    align="center"
                    sx={{
                      padding: '10px',
                      textAlign: 'center',
                      fontSize: '13px',
                    }}
                  >
                    {row[column.dataKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}