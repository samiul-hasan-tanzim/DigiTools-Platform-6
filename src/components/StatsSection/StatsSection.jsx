import { Plus } from 'lucide-react';

const StatsSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] via-[#9514FA] to-[#9514FA]'>
            <div className='container mx-auto p-5 md:p-15 flex justify-between items-center'>
                <div className='text-white font-bold'>
                    <h3 className='flex items-center font-extrabold text-3xl md:text-6xl'>50K <Plus strokeWidth={3} size={40}></Plus></h3>
                    <p className='md:text-2xl'>Active Users</p>
                </div>
                <div className='border-l-px bg-white/50 h-15 md:h-25 w-0.5 md:w-1'></div>
                <div>
                    <div className='text-white font-bold'>
                        <h3 className='flex items-center font-extrabold text-3xl md:text-6xl'>50K <Plus strokeWidth={3} size={40}></Plus></h3>
                        <p className='md:text-2xl'>Active Users</p>
                    </div>
                </div>
                <div className='border-l-px bg-white/50 h-15 md:h-25 w-0.5 md:w-1'></div>
                <div>
                    <div className='text-white font-bold'>
                        <h3 className='flex items-center font-extrabold text-3xl md:text-6xl'>50K <Plus strokeWidth={3} size={40}></Plus></h3>
                        <p className='md:text-2xl'>Active Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;