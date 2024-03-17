import { Link } from "react-router-dom"
import { useFetchCatCategoriesQuery , useFetchCatImagesQuery } from "../../queryCustomHooks/useCategoriesQueryApi"
import LoadingComponent from "../../components/LoadingComponent"


export default function RTKQueryCategories () {

// const {data,isError,isLoading,error} = useFetchCatCategoriesQuery()
const {data,isError,isLoading,error} = useFetchCatImagesQuery()

    return (<>
    <h1>RTKQueryCategories</h1>
    { isError ? <h2>{ error }</h2> : isLoading ? <LoadingComponent/> : "" }
    <ul className="list-group" style={{listStyle:"none"}}>
    {data?.map(item => <li key={item.id} id={item.id} className="list-group-item" >
            <Link to={`/fetch-category/${item.id}`}>{item.name}</Link>
    </li>)}
    </ul>
    </>)
};
