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
  {
    id: 101,
    apellido: "ABAD HUAMAN",
    nombre: "FRANCISCO JAVIER",
    code: 20200111,
    promedio: 15.11,
    cursoSalida: "Medio Ambiente y Desarrollo Sostenible",
    cursoEntrada: "Medio Ambiente y Desarrollo Sostenible",
    fecha: "2024-10-14T09:32:40Z",
    tipo: "Cambio"
},
{
    id: 102,
    apellido: "ABAL CARHUANCHO",
    nombre: "PAOLA RAYZA",
    code: 22200067,
    promedio: 17.64,
    cursoSalida: "Algoritmica I",
    cursoEntrada: "Algotimica I",
    fecha: "2024-10-14T09:32:40Z",
    tipo: "Cambio"
},
{
    id: 103,
    apellido: "ABANTO RUEDA",
    nombre: "REYNERIO INOCENCIO",
    code: 21207177,
    promedio: 15.18,
    cursoSalida: "",
    cursoEntrada: "Desarrollo Movil",
    fecha: "2024-10-14T09:32:41Z",
    tipo: "Entrada"
},
{
    id: 104,
    apellido: "ABANTO SALAS",
    nombre: "FLAVIA FRANCESCA",
    code: 19200064,
    promedio: 16.45,
    cursoSalida: "Calculo II",
    cursoEntrada: "",
    fecha: "2024-10-14T09:32:42Z",
    tipo: "Salida"
},
{
    id: 105,
    apellido: "ABARCA ARANDA",
    nombre: "JOSE LUIS",
    code: 22200001,
    promedio: 14.67,
    cursoSalida: "Interaccion Humano Computador",
    cursoEntrada: "Interaccion Humano Computador",
    fecha: "2024-10-14T09:32:42Z",
    tipo: "Cambio"
},
{
    id: 106,
    apellido: "ABARCA RAMOS",
    nombre: "ALBERTO JUNIOR",
    code: 16200001,
    promedio: 16.81,
    cursoSalida: "Matematica Basica",
    cursoEntrada: "Matematica Basica",
    fecha: "2024-10-14T09:32:43Z",
    tipo: "Cambio"
},
{
    id: 107,
    apellido: "ACOSTA GIBAJA",
    nombre: "RODRIGO YAMIL",
    code: 19200241,
    promedio: 14.32,
    cursoSalida: "Base de Datos II",
    cursoEntrada: "",
    fecha: "2024-10-14T09:32:43Z",
    tipo: "Salida"
},
{
    id: 108,
    apellido: "ACOSTA HUARCAYA",
    nombre: "NICOLLE",
    code: 19200131,
    promedio: 15.43,
    cursoSalida: "",
    cursoEntrada: "Matetatica Discreta",
    fecha: "2024-10-14T09:32:44Z",
    tipo: "Entrada"
},
{
    id: 109,
    apellido: "ACUÑA ANAMPA",
    nombre: "BRITNEY JENNIFER",
    code: 18200129,
    promedio: 12.36,
    cursoSalida: "Estructura de Datos",
    cursoEntrada: "",
    fecha: "2024-10-14T09:32:44Z",
    tipo: "Salida"
},
{
    id: 110,
    apellido: "ACUÑA CORDOVA",
    nombre: "DAVIS BRETTS",
    code: 21207074,
    promedio: 16.39,
    cursoSalida: "Sistemas Operativos",
    cursoEntrada: "Sistemas Operativos",
    fecha: "2024-10-14T09:32:45Z",
    tipo: "Cambio"
},
{
    id: 111,
    apellido: "ACUÑA MONTALVAN",
    nombre: "GERALDINE DAYHANA",
    code: 22200185,
    promedio: 17.46,
    cursoSalida: "Analisis y Diseño de Algoritmos",
    cursoEntrada: "",
    fecha: "2024-10-14T09:32:45Z",
    tipo: "Salida"
},
{
    id: 112,
    apellido: "ADCO VALERIANO",
    nombre: "DIANA YANETH",
    code: 21207087,
    promedio: 0,
    cursoSalida: "",
    cursoEntrada: "Programacion Paralela",
    fecha: "2024-10-14T09:32:46Z",
    tipo: "Entrada"
},
{
    id: 113,
    apellido: "ADOLFO PAUCAR",
    nombre: "KILTOM",
    code: 22200244,
    promedio: 15.75,
    cursoSalida: "Fisica Electronica",
    cursoEntrada: "Fisica Electronica",
    fecha: "2024-10-14T09:32:47Z",
    tipo: "Cambio"
},
{
    id: 114,
    apellido: "AGREDA ROMERO",
    nombre: "CHRISTIAN OSWALDO",
    code: 21207080,
    promedio: 13.14,
    cursoSalida: "Internet de las Cosas",
    cursoEntrada: "",
    fecha: "2024-10-14T09:32:47Z",
    tipo: "Salida"
},
{
    id: 115,
    apellido: "AGUILAR BURGA",
    nombre: "PIERO ANDRÉ",
    code: 16200203,
    promedio: 12.56,
    cursoSalida: "Machine Learning",
    cursoEntrada: "Machine Learning",
    fecha: "2024-10-14T09:32:48Z",
    tipo: "Cambio"
},
{
    id: 116,
    apellido: "AGUILAR CAMPOS",
    nombre: "ESTEFANY SILVIA",
    code: 17200129,
    promedio: 15.43,
    cursoSalida: "Probabilidades",
    cursoEntrada: "Probabilidades",
    fecha: "2024-10-14T09:32:48Z",
    tipo: "Cambio"
},
{
    id: 117,
    apellido: "AGUILAR ESPINOZA",
    nombre: "JOEL ARMANDO",
    code: 18200054,
    promedio: 14.39,
    cursoSalida: "",
    cursoEntrada: "Estadistica",
    fecha: "2024-10-14T09:32:49Z",
    tipo: "Entrada"
},
{
    id: 118,
    apellido: "AGUILAR MATA",
    nombre: "CRISBEL LEIDY",
    code: 21200020,
    promedio: 16.17,
    cursoSalida: "Gestion de Empresas de Software",
    cursoEntrada: "Gestion de Empresas de Software",
    fecha: "2024-10-14T09:32:50Z",
    tipo: "Cambio"
},
{
    id: 119,
    apellido: "AGUILAR PAREDES",
    nombre: "NICOLÁS MARTÍN",
    code: 17200130,
    promedio: 0,
    cursoSalida: "",
    cursoEntrada: "Sistemas Distribuidos",
    fecha: "2024-10-14T09:32:50Z",
    tipo: "Entrada"
}
];

const columns = [
  {
    width: 100, 
    label: 'Apellidos',
    dataKey: 'apellido',
  },
  {
    width: 100, 
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
    width: 100, 
    label: 'Promedio',
    dataKey: 'promedio',
    numeric: true,
  },
  {
    width: 100, 
    label: 'Curso del que sale',
    dataKey: 'cursoSalida',
  },
  {
    width: 100,
    label: 'Curso al que entra',
    dataKey: 'cursoEntrada',
  },
  {
    width: 100, 
    label: 'Fecha y Hora ',
    dataKey: 'fecha',
  },
  {
    width: 80, 
    label: 'Tipo',
    dataKey: 'tipo',
  },
  {
    width: 300,
    label: 'Acciones',
    dataKey: 'actions',
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer
    component={Paper}
    {...props}
    ref={ref}
    sx={{ height: '60vh', width: '80%' }} 
  />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed', minWidth: 550 }} />
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
          sx={{ marginRight: 1, backgroundColor: '#4caf50' }}
        >
          Aprobar
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ marginRight: 1 }}
          onClick={() => handleReject(row.id)}
        >
          Rechazar
        </Button>
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

export default function Rectificaciones() {
  const [data, setData] = useState(initialData); 
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
    setData(data.filter((row) => row.id !== id)); 
  };

  const filteredRows = useMemo(() => {
    const search = searchQuery.toLowerCase();

    return data.filter((row) => {
      const matchesSearch =
        row.apellido.toLowerCase().includes(search) ||
        row.nombre.toLowerCase().includes(search) ||
        new Date(row.fecha).toLocaleString().includes(search);

      const matchesTipo =
        tipoFilter === '' || row.tipo === tipoFilter; 

      return matchesSearch && matchesTipo; 
    });
  }, [searchQuery, tipoFilter, data]);

  const sortedRows = useMemo(() => {
    let sorted = [...filteredRows];
    
    if (orderBy === 'cursoEntrada') {
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
