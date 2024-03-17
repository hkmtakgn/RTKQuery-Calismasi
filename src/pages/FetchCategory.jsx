import { useParams } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import useCategoryFetchApi from "../customHooks/useCategoryFetchApi";
import Row from "../components/Row";
import CatCard from "../components/CatCard";



export default function FetchCategory () {
const {catName} = useParams()
const [isError,isLoading,data,error] = useCategoryFetchApi(catName)

    return (<>
        <h1>Category Name : {catName} </h1>
    { isError ? <h2>{ error }</h2> : isLoading ? <LoadingComponent/> : "" }

    <Row>
        {data.map(item => <CatCard item={item} key={item.id}/>)}
    </Row>
    
    </>)
};
