import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import axios from "axios";
import { Loader } from "../UI/Loader";
function Products() {
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
    return (
        <>
        
        <div className="product-list">

            {
                items.map(item => {
                    return (<ListItems  key={item.id} data={item}/>);
                })
            }
        </div>
        {loader && <Loader/>}
        </>
    );
}
export default Products;