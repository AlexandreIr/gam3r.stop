import Link from "next/link";
import IconCart from "../shared/IconCart";
import Logo from "../shared/Logo";

export default function Header() {
    const qtdItems = 0;
    // const {qtdItems} = useCart();
    return (
        <div className="flex flex-col h-2"
        style={{
            background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)'
        }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <Link href=';checkout/cart'>
                        <IconCart qtdItems={qtdItems}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}