import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navbar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-assignment'>All Assignments</NavLink></li>
        <li><NavLink to='/create-assignment'>Create Assignments</NavLink></li>
        <li><NavLink to='/my-assignment'>My Assignments</NavLink></li>
        <li><NavLink to='/submitted-assignment'>Submitted Assignments</NavLink></li>

    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-[#739072]">
                    {/* Navbar */}
                    <div className="container mx-auto navbar ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1">
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu font-bold menu-horizontal">
                                {navbar}

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    {/* Content */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu font-bold p-4 w-80 min-h-full bg-base-200">
                        {navbar}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;