import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/data/products.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Hubo un problema al buscar productos");
            }
            return response.json();
        })
        .then((data) => {
            setProducts(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <section>
            <h1>Comic Center</h1>
            <ItemList list={products}/>
        </section>
    )
}