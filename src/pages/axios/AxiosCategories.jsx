import { Link } from "react-router-dom"
import useCategoriesAxiosApi from "../../axiosCustomHooks/useCategoriesAxiosApi"
import CatCard from "../../components/CatCard"
import Row from "../../components/Row"
import LoadingComponent from "../../components/LoadingComponent"


export default function AxiosCategories() {
    const [isError,isLoading,data,error] = useCategoriesAxiosApi()
console.log(data)

    return (<>
        <div className="col-sm-12">
            <h1>Axios : Kategoriler </h1>
            {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
            <Row>
                {data.map(item => <Link key={item.id} className="link-item" to={`/axios-category/${item.name}`}>{item.name}</Link>)}
            </Row>
        </div>
    </>)
};
