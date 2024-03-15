"use client"
import {useRouter} from "next/navigation"

const CustomersId = ({params} : {params: {id:string}}) => {
    const router = useRouter()
    //console.log('pouya',params) // show when use client
    return (
        <h2 onClick={()=>router.replace('/dashboard/invoices')} style={{cursor:'pointer'}}>
            {`Customer Id is: ${params.id}`}
        </h2>
    )
}

export default CustomersId