import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import useCategoriesFetchApi from "../customHooks/useCategoriesFetchApi";

export default function FetchCategories () {

const [isError,isLoading,data,error] = useCategoriesFetchApi()

    return (<>
    { isError ? <h2>{ error }</h2> : isLoading ? <LoadingComponent/> : "" }
    <ul className="list-group" style={{listStyle:"none"}}>
    {data.map(item => <li key={item.id} id={item.id} className="list-group-item" >
        <Link to={`/fetch-categories/${item.id}`}>
            <Link to={`/fetch-category/${item.id}`}>{item.name}</Link>
        </Link>
    </li>)}
    </ul>
    </>)
};
