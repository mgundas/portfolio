const MiniNavbar = () => {
    return (
        <div className="fixed bottom-0 left-3 grid grid-cols-1 gap-2">
            <ul className="flex flex-col items-center justify-center">
                <li className="rounded-lg p-2 text-2xl bg-transparent"><i className="fa-regular fa-envelope icon-hover"></i></li>
                <li className="rounded-lg p-2 text-2xl"><i className="fa-brands fa-linkedin icon-hover"></i></li>
                <li className="rounded-lg p-2 text-2xl"><i className="fa-brands fa-github icon-hover"></i></li>
            </ul>
            <div className="h-24 w-1 rounded-t-lg bg-white mx-auto"></div>
        </div>
    );
}

export default MiniNavbar;
