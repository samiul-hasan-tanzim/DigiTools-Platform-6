import { ShoppingCart } from "lucide-react";


const Header = ({ cartData }) => {
    return (
        <div className='bg-base-100 shadow-sm font-semibold'>
            <div className='md:container md:mx-auto py-3'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <a className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <div className="flex relative">
                            <ShoppingCart />
                            {
                                cartData.length > 0 ? <p className="relative -top-2 -left-2 bg-red-500 w-4 h-4 text-[10px] text-white flex justify-center items-center rounded-full">{cartData.length}</p> : null
                            }
                        </div>
                        <p className="hidden md:block">Login</p>
                        <a className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;