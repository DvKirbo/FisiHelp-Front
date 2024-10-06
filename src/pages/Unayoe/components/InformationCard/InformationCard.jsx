import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



// eslint-disable-next-line react/prop-types
function InformationCard({title,content, image, link}){
    return(
        <Card sx={{ maxWidth: 345 ,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '600',
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx ={{mt:'auto'}} >
          <Button size="small" color="primary">
            ver mas
          </Button>
        </CardActions>
      </Card>
    )
}

export default InformationCard;