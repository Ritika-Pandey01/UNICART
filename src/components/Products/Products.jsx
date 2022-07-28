import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import axios from "axios";
import { Loader } from "../UI/Loader";
function Products({onAddItems,onRemoveItems}) {
    const [items, setItems] = useState([]);
    const [loader,setLoader]=useState(true);
    const [presentItems,setPresentItems]=useState([]);
    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://e-commerce-react-7d16c-default-rtdb.firebaseio.com/items.json')
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                // setLoader(false);
                setItems(transformedData);
            }
            catch (error) {
                // setLoader(false);
                console.log(error);
            }
            finally{
                setLoader(false);
            }
        }
        fetchItems();
    }, []);
    const handleAddItems=id=>{
        
        if(presentItems.indexOf(id)>-1){
            return;
        }
        setPresentItems([...presentItems,id])
        onAddItems();
    }
    const handleRemoveItems=id=>{
        let index=presentItems.indexOf(id);
        if(index>-1){
            let items=[...presentItems];
            items.splice(index,1)
            setPresentItems([...items]);
            onRemoveItems();
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