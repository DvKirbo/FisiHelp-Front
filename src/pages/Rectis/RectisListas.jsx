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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Select, Typography } from '@mui/material';
import { useState, useMemo } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import TextField from '@mui/material/TextField';

// Datos JSON
const initialData = [
];

const columns = [
  {
    width: 110, 
    label: 'Apellidos',
    dataKey: 'apellido',
  },
  {
    width: 110, 
    label: 'Nombre',
    dataKey: 'nombre',
  },
  {
    width: 80, 
    label: 'Código',
    dataKey: 'code',
    numeric: true,
  },
  {
    width: 110, 
    label: 'Promedio',
    dataKey: 'promedio',
    numeric: true,
  },
  {
    width: 110, 
    label: 'Curso del que sale',
    dataKey: 'cursoSalida',
  },
  {
    width: 110,
    label: 'Curso al que entra',
    dataKey: 'cursoEntrada',
  },
  {
    width: 120, 
    label: 'Carrera',
    dataKey: 'carrera',
  },
  {
    width: 130, 
    label: 'Fecha y Hora ',
    dataKey: 'fecha',
  },
  {
    width: 80, 
    label: 'Tipo',
    dataKey: 'tipo',
  },
  {
    width: 250,
    label: 'Acciones',
    dataKey: 'actions',
  },
];

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

function rowContent(_index, row, handleOpenDialog, handleReject) {
  return (
    <React.Fragment>
      {columns.slice(0, -1).map((column) => (
        <TableCell
          key={column.dataKey}
          align="left"
          sx={{ padding: '10px' }}
        >
          {column.dataKey === 'fecha'
            ? new Date(row[column.dataKey]).toLocaleString()
            : row[column.dataKey]}
        </TableCell>
      ))}
      <TableCell sx={{ padding: '10px' }}>
        <Button
          variant="contained"
          onClick={() => handleOpenDialog(row.id)}
          sx={{ backgroundColor: '#FFA500' }}
        >
          Ver
        </Button>
      </TableCell>
    </React.Fragment>
  );
}

export default function RectisListas() {
  const [data, setData] = useState(initialData); // Usamos los datos iniciales
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('fecha');
  const [orderDirection, setOrderDirection] = useState('desc');
  const [tipoFilter, setTipoFilter] = useState(''); 
  const [open, setOpen] = useState(false);
  const [justification, setJustification] = useState('');
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleOpenDialog = (id) => {
    const selectedRow = data.find(row => row.id === id);
    setSelectedRowId(id);
    setJustification(`Justificación para ${selectedRow.nombre} ${selectedRow.apellido}`);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setJustification('');
  };

  const handleReject = (id) => {
    setData(data.filter((row) => row.id !== id)); // Elimina el evento rechazado
  };

  const filteredRows = useMemo(() => {
    const search = searchQuery.toLowerCase();

    return data.filter((row) => {
      const matchesSearch =
        row.apellido.toLowerCase().includes(search) ||
        row.nombre.toLowerCase().includes(search) ||
        row.carrera.toLowerCase().includes(search) ||
        new Date(row.fecha).toLocaleString().includes(search);

      const matchesTipo =
        tipoFilter === '' || row.tipo === tipoFilter; 

      return matchesSearch && matchesTipo; 
    });
  }, [searchQuery, tipoFilter, data]);

  const sortedRows = useMemo(() => {
    let sorted = [...filteredRows];
    
    if (orderBy === 'carrera') {
      sorted = sorted.sort((a, b) => a.carrera.localeCompare(b.carrera));
    } else if (orderBy === 'cursoEntrada') {
      sorted = sorted.sort((a, b) => a.cursoEntrada.localeCompare(b.cursoEntrada));
    } else if (orderBy === 'cursoSalida') {
      sorted = sorted.sort((a, b) => a.cursoSalida.localeCompare(b.cursoSalida));
    } else if (orderBy === 'promedio') {
      sorted = sorted.sort((a, b) => b.promedio - a.promedio);
    } else if (orderBy === 'fecha') {
      sorted = sorted.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    if (orderDirection === 'asc') {
      return sorted.reverse();
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
          <MenuItem value="cursoSalida">Curso de Salida</MenuItem>
          <MenuItem value="promedio">Promedio</MenuItem>
        </Select>
        <Select
          value={orderDirection}
          onChange={(e) => setOrderDirection(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="desc">Orden Descendente</MenuItem>
          <MenuItem value="asc">Orden Ascendente</MenuItem>
        </Select>
        <Select
          value={tipoFilter}
          onChange={(e) => setTipoFilter(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="">Todos los tipos</MenuItem>
          <MenuItem value="Entrada">Entradas</MenuItem>
          <MenuItem value="Salida">Salidas</MenuItem>
          <MenuItem value="Cambio">Cambios</MenuItem>
        </Select>
      </Box>

      <TableVirtuoso
        components={VirtuosoTableComponents}
        totalCount={sortedRows.length}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(index) => rowContent(index, sortedRows[index], handleOpenDialog, handleReject)}
      />

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Justificación</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{justification}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
