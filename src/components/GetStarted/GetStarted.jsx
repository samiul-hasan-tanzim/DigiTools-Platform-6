import accountImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className='container mx-auto bg-gray-50 p-5 pb-10 mt-40'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-center py-5'>Get Started in 3 Steps</h2>
            <p className='text-[#627382] text-center pb-15'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
                <div className='flex flex-col justify-center items-center bg-white rounded-2xl space-y-5 p-10  relative  border border-black/10'>
                    <div className='bg-primary/30 rounded-full p-5'>
                        <img src={accountImg} alt="" />
                    </div>
                    <h5 className='text-2xl font-bold'>Create Account</h5>
                    <p className='w-80 text-center p-1 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    <p className='absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center rounded-full text-white'>01</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-white rounded-2xl space-y-5 p-10  relative  border border-black/10'>
                    <div className='bg-primary/30 rounded-full p-5'>
                        <img src={packageImg} alt="" />
                    </div>
                    <h5 className='text-2xl font-bold'>Choose Products</h5>
                    <p className='w-80 text-center p-1 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    <p className='absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center rounded-full text-white'>02</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-white rounded-2xl space-y-5 p-10  relative  border border-black/10'>
                    <div className='bg-primary/30 rounded-full p-5'>
                        <img src={rocketImg} alt="" />
                    </div>
                    <h5 className='text-2xl font-bold'>Start Creating</h5>
                    <p className='w-80 text-center p-1 text-[#627382]'>Download and start using your premium tools immediately.</p>
                    <p className='absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 flex items-center justify-center rounded-full text-white'>02</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;