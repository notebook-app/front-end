import React from 'react';

type RouteEndpoint = {
    url: string;
    name: string;
    icon: JSX.Element;
};

const endpoints: RouteEndpoint[] = [
    {
        url: '/sticky-notes',
        name: 'Sticky',
        icon: <i className="fa-solid fa-note-sticky"/>
    },

];

export default function Nav({children}: { children?: JSX.Element }) {
    return (
        <nav className={'border-r-2 border-gray-300 h-full float-left bg-[#1C1E26] text-white standard-nav'}>
            <div className="text-center font-light">
                <span className={'text-sm'}>Notes</span>
            </div>

            <div className={'grid mt-7 text-left'}>
                {
                    endpoints.map(({url, name, icon}: RouteEndpoint, index: number) => {
                        return <a
                            key={url}
                            className={`hover:bg-gray-600 w-4/5 text-center rounded-r-sm`}
                            href={url}
                        >
                            {icon}
                            {' ' + name}
                        </a>
                    })
                }
            </div>
            {
                /* REACT CHILDREN IF EXISTS */
                children &&
                <div className={'text-center mt-5'}>
                    {children}
                </div>
            }
        </nav>
    );
}
