import { Box } from "@mui/material";
import './SelectP.css';
// eslint-disable-next-line react/prop-types
export default function SelectP({title, descripction,color="#007FFF", hover="#0066CC", setmode }){
    return (
        <div className="box_container"
            onClick={setmode}
        >
            <Box
            sx={{
                width: 400,
                height: 100,
                color: 'white',
                borderRadius: 3,
                bgcolor: color,
                '&:hover': {
                  bgcolor: hover,
                },
              }}
            >
                <h1>{title}</h1>
                <p>{descripction}</p>
            </Box>
        </div>
    )
}