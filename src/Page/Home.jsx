
import NewsCard from "../Components/News"
import { useLoaderData } from "react-router-dom"

const Home = () => {
    // const [data, setData] = useState()

    // useEffect(() => {
    //     async function getdata() {
    //         let data = await Axioss();
    //         return data
    //     }
    //     getdata().then(data => setData(data.articles))
    // }, [])

    // console.log("object")
    // console.log(data)


    const data = useLoaderData()
    console.log(data)

    return (
        <>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3 space-y-2 m-3">
                {data.articles?.map((data, index) => (
                    (data.urlToImage && data.description) && <NewsCard
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.urlToImage}
                        link={data.url} />

                ))}
            </div>
        </>
    )
}

export default Home