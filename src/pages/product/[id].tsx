import { useRouter } from "next/router"

 const ProductParam = () =>{
    const {query} = useRouter();
    return(
        <h1>
            Hello Friend is a params product page {query.id}
        </h1>
    )
}
export default ProductParam;