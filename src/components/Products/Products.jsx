import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import axios from "axios";
import { Loader } from "../UI/Loader";
import { useParams } from "react-router-dom";
function Products() {
    const [items, setItems] = useState([]);
    const [loader,setLoader]=useState(true);
    const params=useParams();
    
    useEffect(() => {
        async function fetchItems() {
            try {
                let slug=`items.json`;
                if(params.category){
                    slug=`items-${params.category}.json`
                }
                const response = await axios.get(`https://e-commerce-react-7d16c-default-rtdb.firebaseio.com/${slug}`)
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
        return()=>{
            setItems([])
            setLoader(true)
        }
    }, [params]);
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