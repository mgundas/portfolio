import db from '../../database/database';

const Footer = () => {
    return (
        <div className="px-15 py-6 flex items-center justify-center">
           &copy; {db.profile.name} {new Date().getFullYear()}
        </div>
    );
}

export default Footer;
