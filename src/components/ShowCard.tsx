import React from 'react';
import type { Show } from '~/types/Show.ts'; 

interface ShowCardProps {
    show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
    return (
        <div className="block max-w-[18rem] rounded-lg bg-gray-900 text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white m-1">
            <div className="p-6">
                <h5 className="mb-1 text-xl font-medium leading-tight ">
                    {show.show_name}
                </h5>
                <h6
                    className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                    {show.show_date}
                </h6>
                <p className="mb-4 text-base leading-normal">
                    {show.show_venue}
                </p>
                <a
                    type="button"
                    href="#"
                    className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                    {show.show_link}
                </a>
            </div>
        </div>
    );
}
