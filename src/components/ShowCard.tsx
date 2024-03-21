import React from 'react';
import type { Show } from '~/types/Show.ts'; 

interface ShowCardProps {
    show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
    return (
        <div>
            {show.city_name}
        </div>
    );
}
