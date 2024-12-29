import React from 'react';

function Footer() {
    return (
        <div className="footer bg-black text-white py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto mt-10">
                <div className="text-center mt- ">
                    <p className='text-white-800'>Questions? Call <a href="000-800-919-1694">000-800-919-1694</a></p>
                    <button className="flex items-center mx-auto md:mx-0 mt-10 md:mt-0 md:col-span-1 bg-gray-700 text-white px-4 py-2 rounded-md">
                        <svg viewBox="0 0 16 16" height="15" width="15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path>
                        </svg> English <i className="fa fa-caret-down"></i>
                    </button>
                </div>
                <div className="block2 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="in-block">
                        <ul className="">
                            <li><a href="#" className="block py-2 px-4 text-white-800">FAQ</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800 ">Investor Relations</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Privacy</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Speed Test</a></li>
                        </ul>
                    </div>
                    <div className="in-block2">
                        <ul>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Help Center</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Jobs</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Cookies Preference</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Legal Notice</a></li>
                        </ul>
                    </div>
                    <div className="in-block3">
                        <ul>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Account</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Way To watch</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Corporate Information</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Only On Netflix</a></li>
                        </ul>
                    </div>
                    <div className="in-block4">
                        <ul>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Media Center</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Terms To use</a></li>
                            <li><a href="#" className="block py-2 px-4 text-white-800">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="text-center mt-10">Netflix India</p>
        </div>
    );
}

export default Footer;
