import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import axios from "axios";
import { Loader } from "../UI/Loader";
function Products({onAddItems,onRemoveItems,eventList}) {
    const [items, setItems] = useState([]);
    const [loader,setLoader]=useState(true);
    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://e-commerce-react-7d16c-default-rtdb.firebaseio.com/items.json')
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity:0,
                        id: index
                    }
                })
                setItems(transformedData);
            }
            catch (error) {
                console.log(error);
            }
            finally{
                setLoader(false);
            }
        }
        fetchItems();
    }, []);
    useEffect(()=>{
        if(eventList.id>-1){
            if(eventList.type===1){
                handleAddItems(eventList.id)
            }
            else if(eventList.type===-1){
                handleRemoveItems(eventList.id)
            }
        }
    },[eventList]);
    const handleAddItems=id=>{
        let data=[...items]
        let index=data.findIndex(i=>i.id===id)
        data[index].quantity+=1
        setItems([...data])
        onAddItems(data[index]);
      
    }
    const handleRemoveItems=id=>{
        let data=[...items]
        let index=data.findIndex(i=>i.id===id)
        if(data[index].quantity!==0){
            data[index].quantity-=1
            setItems([...data])
            onRemoveItems(data[index]);
        }

        
    }
    return (
        <>
        
        <div className="product-list">

            {
                items.map(item => {
                    return (<ListItems onAdd={handleAddItems} onRemove={handleRemoveItems} key={item.id} data={item}/>);
                })
            }
        </div>
        {loader && <Loader/>}
        </>
    );
}
export default Products;