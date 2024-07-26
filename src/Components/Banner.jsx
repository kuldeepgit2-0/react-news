
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const newsArticles = [
        {
            title: "Breaking News 1",
            description: "Description for breaking news 1",
            image: "https://via.placeholder.com/1200x400?text=Breaking+News+1"
        },
        {
            title: "Breaking News 2",
            description: "Description for breaking news 2",
            image: "https://via.placeholder.com/1200x400?text=Breaking+News+2"
        },
        {
            title: "Breaking News 3",
            description: "Description for breaking news 3",
            image: "https://via.placeholder.com/1200x400?text=Breaking+News+3"
        }
    ];

    return (
        <div className="container mx-auto mt-8">
            <Slider {...settings}>
                {newsArticles.map((article, index) => (
                    <div key={index} className="relative">
                        <img src={article.image} alt={article.title} className="w-full h-96 object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h2 className="text-3xl font-bold text-white">{article.title}</h2>
                            <p className="text-white">{article.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
