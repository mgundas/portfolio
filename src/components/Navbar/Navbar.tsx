import db from '../../database/database';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 h-16 flex items-center justify-between px-10">
            <h1 className="text-white text-xl ml-4">{db.profile.name}</h1>
            <ul className="gap-4 items-center hidden sm:flex">
                <li className="inline-block text-white mr-4">About</li>
                <li className="inline-block text-white mr-4">Skills</li>
                <li className="inline-block text-white mr-4">Projects</li>
                <li className="inline-block text-white mr-4">Contact</li>
                <li className="inline-block text-white mr-4">Resume</li>
            </ul>
            <button className='flex items-center justify-center p-4 sm:hidden cursor-pointer'><i className="fa-solid fa-bars"></i></button>
        </div>
    );
}

export default Navbar;
