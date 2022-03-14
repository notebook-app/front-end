import React from 'react';

type RouteEndpoint = {
    url: string;
    name: string;
};

const endpoints: RouteEndpoint[] = [
    {
        url: '/sticky-notes',
        name: 'Sticky'
    },
    {
        url: '/notes',
        name: 'Notes'
    },
];

export default function Nav({children}: { children?: JSX.Element }) {
    return (
        <nav className={'border-r-2 border-gray-300 h-full float-left'}>
            <div className="text-center font-light">
                <span className={'text-sm'}>Notes</span>
            </div>

            <div className={'grid mt-7 text-center border-b-2 border-gray-300'}>
                {
                    endpoints.map(({url, name}: RouteEndpoint, index: number) => {
                        return <a
                            className={`ml-5 mr-5 hover:text-gray-400 ${index === endpoints.length - 1 && 'mb-5'}`}
                            href={url}
                        >
                            {name}
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
