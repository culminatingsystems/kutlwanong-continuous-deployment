import { Link } from '@inertiajs/react';
import logo from '../Assets/logo.png';
import photo from '../Assets/construction.png';

export default function ConstructionLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:flex-row sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            {/* Left column with login form */}
            <div className="flex flex-col items-center justify-center sm:w-1/2">
                <div>
                    <Link href="/">
                        <img src={logo} alt="Kutlwanong Logo" className="w-full h-28 mb-2" />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4">
                    {children}
                </div>
            </div>

            {/* Right column with photo */}
            <div className="hidden sm:flex sm:w-1/2 overflow-hidden">
                <img src={photo} alt="Kutlwanong Photo" className="h-full max-w-full" />
            </div>
        </div>
    );
}
