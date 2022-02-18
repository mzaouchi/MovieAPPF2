import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie=({setInpt,setRate,inpt,rate})=>{
    const handleReset=()=>{
        setInpt('')
        setRate(0)
    }
    return(
        <div className="modalL">
            <input onChange={(e)=> setInpt(e.target.value)} value={inpt}/>
            <Rating onChange={(e)=> setRate(e.target.value)} value={rate}/>
            <Button variant="outline-warning" onClick={handleReset} >Reset</Button>
        </div>
    )
}

export default FilterMovie