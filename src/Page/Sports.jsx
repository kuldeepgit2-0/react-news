import { useLoaderData } from "react-router-dom"
import NewsData from "../Components/News"


const Sports = () => {

    const data = useLoaderData()

    return (
        <>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-3 space-y-2 m-3">
                {data.articles?.map((data, index) => (
                    (data.urlToImage && data.description) && <NewsData
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

export default Sports