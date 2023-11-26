import { v4 as uuidv4 } from 'uuid';
import ProductItem from "./ProductItem";



const ProductList = (props) => {
    return ( 
        <section className='productGallery'>
            {props.productArr.map((product) => <ProductItem
                key={uuidv4()}
                image={product.image}
                title={product.title}
                price={product.price}
            />
            )}
        </section>
    );
}

export default ProductList;