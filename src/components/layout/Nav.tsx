import React from 'react';
export default function Nav() {
    return (
        <nav className={'border-r-2 border-gray-300 h-full float-left'}>
            <div className="text-center font-light">
                <span className={'text-sm'}>Notes</span>
            </div>

            <div className={'grid mt-7'}>
                <a
                    className={'ml-5 mr-5 hover:text-gray-400'}
                    href="/sticky-notes"
                >
                    Sticky
                </a>
                <a className={'ml-5 mr-5 hover:text-gray-400'} href="/notes">
                    Notes
                </a>
            </div>
        </nav>
    );
}
