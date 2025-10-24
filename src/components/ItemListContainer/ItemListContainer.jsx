import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

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
            <h1>Bienvenidos</h1>
            <div className="products-list">
                <ItemList list={products}/>    
            </div>
            
        </section>
    )
}