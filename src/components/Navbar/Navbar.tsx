const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 h-16 flex items-center justify-between px-10">
            <h1 className="text-white text-xl ml-4">Mehmet Gündaş</h1>
            <ul className="flex gap-4 items-center">
                <li className="inline-block text-white mr-4">About</li>
                <li className="inline-block text-white mr-4">Skills</li>
                <li className="inline-block text-white mr-4">Projects</li>
                <li className="inline-block text-white mr-4">Contact</li>
                <li className="inline-block text-white mr-4">Resume</li>
            </ul>
        </div>
    );
}

export default Navbar;
