import { products } from "@/core";

export default function PageProduct (props: any) {
    const id = +props.params.id;
    const product = products.find(prod=> prod.id===id);
    return (
        <div>
            <img src={product?.image} alt={product?.name} />
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <span>R$ {`${product?.basePrice}\t`}</span>
            <h1>Produto: {product?.id}</h1>
        </div>
    )
}