import db from "@/database/database";

const MiniNavbar = () => {
    return (
        <div className="hidden fixed bottom-0 left-3 lg:grid grid-cols-1 gap-2 z-50">
            <div className="flex flex-col items-center justify-center">
                <a href={db.socials.email} target="blank" className="rounded-lg p-2 text-2xl bg-transparent"><i className="fa-regular fa-envelope icon-hover"></i></a>
                <a href={db.socials.linkedin} target="blank" className="rounded-lg p-2 text-2xl"><i className="fa-brands fa-linkedin icon-hover"></i></a>
                <a href={db.socials.github} target="blank" className="rounded-lg p-2 text-2xl"><i className="fa-brands fa-github icon-hover"></i></a>
            </div>
            <div className="h-24 w-1 rounded-t-lg bg-white mx-auto"></div>
        </div>
    );
}

export default MiniNavbar;
