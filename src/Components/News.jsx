import { Link } from "react-router-dom";


const NewsData = ({ title, description, image, link }) => {
    return (
        <div className="min-w-64  overflow-hidden shadow-lg rounded-2xl bg-white">
            <img className="w-full h-48 object-cover rounded-2xl p-2" src={image} alt={title} />
            <div className="px-6 py-2">
                <h2 className="text-xl font-semibold mb-2">{title.length > 40 ? title.slice(0, 40) + "..." : title}</h2>
                <p className="text-gray-700 text-base">
                    {description.length > 70 ? description.slice(0, 70) + "..." : description}
                </p>
            </div>
            <div className="px-6 py-2">
                <Link to={link} target="_blank" className="text-blue-500 hover:text-blue-700 font-semibold">Read more</Link>
            </div>
        </div>
    );
};

export default NewsData;
