import { ProductItem } from "@/components/Product/productItem";
import Header from "@/components/Template/Header";
import { products } from "@/core";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-3 mx-4">
      {/* <Header/> */}
      {products.map((prod)=>(
        <ProductItem key={prod.id} product={prod}/>
      ))}
    </div>
  );
}
