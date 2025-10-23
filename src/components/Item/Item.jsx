import "./Item.css";

export const Item = ({ id, name, title, price, category, publisher, description, imageUrl, children}) => {
    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{title}</h2>
            <p>Precio: ${price}</p>
            <p>Descripción: {description}</p>
            <p>Editor: {publisher}</p>
            {children}
        </article>
    );
};