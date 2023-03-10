import React ,{useRef,useState}  from 'react'

import fruitsData from '../fruits.json'
import FruitInfoModel from './FruitInfoModel';
const Hompage = () => {
    const [open,setOpen]=useState(true);
    const [fruitData,setFruitData]=useState(fruitsData[0]);
    const fruitName=useRef(null);
    const fruits=fruitsData;
    const fetchData = (event) => {
       for(let i=0;i<fruits.length;i++){

        if(fruits[i].name===fruitName.current.value){   
            console.log(fruits[i].name , fruitName.current.value)
            setFruitData(fruits[i])

            console.log(fruitData);
            break
        }
        else{
            setFruitData(null)
        }
       }

    }
        
    return (
        <div className='homepage-container'>
            
            <div className="input-group">
                <div>
                <h1 className='homepage-heading'>Fruit Info Search</h1>
                </div>
                <input ref={fruitName} onChange={fetchData} className='homepage-fruit-search' placeholder='Enter Fruit Name to Search' />
                {/* <button className="button-4" > submit</button> */}

                    {open && <FruitInfoModel  fruitprops={fruitData} checkFruit={true} />}
        

            </div>
            
        </div>
       
    )
}

export default Hompage