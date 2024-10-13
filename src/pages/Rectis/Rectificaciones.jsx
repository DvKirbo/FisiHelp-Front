import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TableVirtuoso } from 'react-virtuoso';
import Chance from 'chance';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Select } from '@mui/material';
import { useState, useMemo } from 'react';

const chance = new Chance(42);

// Función para generar datos aleatorios con una fecha aleatoria
function createData(id) {
  return {
    id,
    apellido: chance.last(),
    nombre: chance.first(),
    code: chance.integer({ min: 1000, max: 9999 }),
    promedio: parseFloat(chance.floating({ min: 10, max: 20 }).toFixed(2)),
    cursoSalida: `Curso ${chance.integer({ min: 1, max: 5 })}`,
    cursoEntrada: `Curso ${chance.integer({ min: 1, max: 5 })}`,
    carrera: chance.pickone(['Ingeniería de Software', 'Ingeniería de Sistemas']),
    fecha: chance.date({ year: 2024, month: 9, day: 15 }).toISOString(), // Fecha aleatoria
  };
}

const columns = [
  {
    width: 140,
    label: 'Apellidos',
    dataKey: 'apellido',
  },
  {
    width: 140,
    label: 'Nombre',
    dataKey: 'nombre',
  },
  {
    width: 100,
    label: 'Código',
    dataKey: 'code',
    numeric: true,
  },
  {
    width: 140,
    label: 'Promedio Ponderado',
    dataKey: 'promedio',
    numeric: true,
  },
  {
    width: 140,
    label: 'Curso del que sale',
    dataKey: 'cursoSalida',
  },
  {
    width: 140,
    label: 'Curso al que entra',
    dataKey: 'cursoEntrada',
  },
  {
    width: 200,
    label: 'Carrera',
    dataKey: 'carrera',
  },
  {
    width: 200,
    label: 'Fecha y Hora ',
    dataKey: 'fecha',
  },
  {
    width: 200,
    label: 'Acciones',
    dataKey: 'actions',
  },
];

const rows = Array.from({ length: 200 }, (_, index) => createData(index));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed', minWidth: 700 }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
          style={{ width: column.width }}
          sx={{ backgroundColor: '#1976d2', color: 'white', fontWeight: 'bold', padding: '20px', fontSize: '1.2rem' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.slice(0, -1).map((column) => (
        <TableCell
          key={column.dataKey}
          align="left"
          sx={{ padding: '10px' }}
        >
          {column.dataKey === 'fecha'
            ? new Date(row[column.dataKey]).toLocaleString() // Formato legible de la fecha
            : row[column.dataKey]}
        </TableCell>
      ))}
      <TableCell sx={{ padding: '10px' }}>
        <Button
          variant="contained"
          sx={{ marginRight: 1, backgroundColor: '#4caf50' }}
        >
          Aprobar
        </Button>
        <Button
          variant="contained"
          color="error"
        >
          Rechazar
        </Button>
      </TableCell>
    </React.Fragment>
  );
}

export default function Rectificaciones() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('fecha'); // Ordenar por fecha por defecto
  const [orderDirection, setOrderDirection] = useState('desc'); // Ascendente o descendente
  const [filteredRows, setFilteredRows] = useState(rows);

  // Manejar búsqueda y filtros combinados
  React.useEffect(() => {
    const search = searchQuery.toLowerCase();

    setFilteredRows(
      rows.filter((row) => {
        const matchesSearch =
          row.apellido.toLowerCase().includes(search) ||
          row.nombre.toLowerCase().includes(search) ||
          row.carrera.toLowerCase().includes(search) ||
          row.fecha.toLowerCase().includes(search);

        return matchesSearch;
      })
    );
  }, [searchQuery]);

  // Manejar ordenamiento
  const sortedRows = useMemo(() => {
    let sorted = [...filteredRows];
    
    if (orderBy === 'carrera') {
      sorted = sorted.sort((a, b) => a.carrera.localeCompare(b.carrera));
    } else if (orderBy === 'cursoEntrada') {
      sorted = sorted.sort((a, b) => a.cursoEntrada.localeCompare(b.cursoEntrada));
    } else if (orderBy === 'cursoSalida') { // Agregamos el orden por curso de salida
      sorted = sorted.sort((a, b) => a.cursoSalida.localeCompare(b.cursoSalida));
    } else if (orderBy === 'promedio') {
      sorted = sorted.sort((a, b) => b.promedio - a.promedio); // De mayor a menor
    } else if (orderBy === 'fecha') {
      sorted = sorted.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    if (orderDirection === 'asc') {
      return sorted.reverse(); // Cambiar a orden ascendente si se selecciona
    }

    return sorted;
  }, [filteredRows, orderBy, orderDirection]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, width: '80%' }}>
        <TextField
          label="Buscar por nombre o apellido"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="fecha">Orden por Fecha (Defecto)</MenuItem>
          <MenuItem value="carrera">Carrera</MenuItem>
          <MenuItem value="cursoEntrada">Curso de Entrada</MenuItem>
          <MenuItem value="cursoSalida">Curso de Salida</MenuItem> {/* Nueva opción */}
          <MenuItem value="promedio">Promedio Ponderado</MenuItem>
        </Select>
        <Select
          value={orderDirection}
          onChange={(e) => setOrderDirection(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="asc">Ascendente</MenuItem>
          <MenuItem value="desc">Descendente</MenuItem>
        </Select>
      </Box>
      <Paper sx={{
        height: 900,
        width: '100%',
        boxShadow: '0px 3px 15px rgba(0,0,0,02)',
        borderRadius: 4
      }}>
        <TableVirtuoso
          data={sortedRows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </Box>
  );
}
