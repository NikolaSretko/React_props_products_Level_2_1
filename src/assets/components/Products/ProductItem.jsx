

const ProductItem = (props) => {

    return ( 
        <article>
            <img src={props.image} alt={props.title} />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>Buy</button>
        </article>
    );

}

export default ProductItem;