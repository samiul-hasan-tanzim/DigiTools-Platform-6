import { Play } from 'lucide-react';
import image from '../../assets/banner.png';

const HeroSection = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center md:mt-15 py-5'>
            <div className=' flex flex-col gap-5 items-center md:items-start p-5 py-15 md:py-0 md:p-0'>
                <div className='bg-[#E1E7FF] w-fit flex items-center rounded-full p-1 px-4 gap-2'>
                    <div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-primary animate-ping"></div>
                        <div aria-label="status" className="status status-primary"></div>
                    </div>
                    <p className='font-bold bg-linear-to-r from-[#4F39F6] via-[#7525F8] to-[#9514FA] bg-clip-text text-transparent'> New: AI-Powered Tools Available</p>
                </div>
                <p className='text-center md:text-left md:w-90 lg:w-160 text-2xl md:text-4xl lg:text-7xl font-extrabold'>
                    Supercharge Your Digital Workflow
                </p>
                <p className='w-90 text-center md:text-left md:w-130 flex flex-col text-[#627382]'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    <span>
                        Explore Products
                    </span>
                </p>
                <div className=' flex gap-4'>
                    <button className='py-6 font-bold btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>

                    <div className="rounded-full bg-linear-to-r from-[#4F39F6] via-[#7525F8] to-[#9514FA] p-px ">
                        <button className="cursor-pointer font-bold rounded-full bg-white ">
                            <div className='flex p-3'>
                                <p className='text-blue-700'>
                                    <Play />
                                </p>
                                <p className=' font-bold bg-linear-to-r from-[#4F39F6] via-[#7525F8] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mobile-width'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;