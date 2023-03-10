
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const FruitInfoModel = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen =  (e)=> {e.preventDefault()
    setOpen(true)};
  const handleClose = () => setOpen(false);
  
  const data= (props.fruitprops);
  console.log(JSON.stringify(props.fruitprops))
  return (
    <div>
      <Button onClick={handleOpen} type="submit">Search</Button>
      
      <Modal
        open={open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {data==null && <h1>No Data Found</h1>}
           
          {data!=null && <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
          <h3>GeneralData</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Genus = {data.genus}</p>
            <p>Name = {data.name}</p>
            <p>Family = {data.family}</p>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <h3>Nutritional Information</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Carbohydrates = {data.nutritions.carbohydrates}</p>
            <p>Protein = {data.nutritions.protein}</p>
            <p>Fat = {data.nutritions.fat}</p>
            <p>Calories = {data.nutritions.calories}</p>
            <p>Sugar = {data.nutritions.sugar}</p>
          </Typography>
          
          </div>}
          <Button onClick={handleClose} >Close</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default FruitInfoModel