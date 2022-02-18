import { Rating } from "@mui/material"
import { Card } from "react-bootstrap"
import ShowMoreText from "react-show-more-text"

const CardMovie=({movie})=>{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterURL} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <ShowMoreText lines={4} more="More" less="Less" className='showMore'>
                            {movie.description}
                        </ShowMoreText>                     
                    </Card.Text>  
                    <Rating readOnly value={movie.rating}/>                                  
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardMovie