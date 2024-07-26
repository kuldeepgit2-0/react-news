
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">NewsWebsite</h2>
                        <p className="text-gray-400">
                            Providing the latest and most relevant news stories from around the world.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 xl:grid xl:grid-cols-2">
                            <li><NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink></li>
                            <li><NavLink to="india" className="text-gray-300 hover:text-white">India</NavLink></li>
                            <li><NavLink to="world" className="text-gray-300 hover:text-white">World</NavLink></li>
                            <li><NavLink to="politics" className="text-gray-300 hover:text-white">Politics</NavLink></li>
                            <li><NavLink to="bussiness" className="text-gray-300 hover:text-white">Business</NavLink></li>
                            <li> <NavLink to="tech" className="text-gray-300 hover:text-white">Technology</NavLink></li>
                            <li><NavLink to="sport" className="text-gray-300 hover:text-white">Sports</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-400 mb-2">
                            Email: <a href="mailto:info@newswebsite.com" className="text-gray-300 hover:text-white">info@newswebsite.com</a>
                        </p>
                        <p className="text-gray-400">
                            Phone: <a href="tel:+1234567890" className="text-gray-300 hover:text-white">+123 456 7890</a>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} NewsWebsite. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
