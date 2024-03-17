import { useParams } from "react-router-dom"
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi"
import CatCard from "../../components/CatCard"
import Row from "../../components/Row"
import LoadingComponent from "../../components/LoadingComponent"




export default function AxiosCategory () {
const {catName} = useParams()
const [isError,isLoading,data,error] = useCategoryAxiosApi(catName)

    return (<>
        <h1>Category Name : {catName} </h1>
    { isError ? <h2>{ error }</h2> : isLoading ? <LoadingComponent/> : "" }

    <Row>
        {data.map(item => <CatCard item={item} key={item.id}/>)}
    </Row>
    
    </>)
};
