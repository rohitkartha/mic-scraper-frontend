
import { useEffect, useState } from 'react';
import {ShowCard} from "~/components/ShowCard.tsx";
import type {Show} from "~/types/Show.ts"
import InfiniteScroll from 'react-infinite-scroll-component';

export function SideBar({ shows }: { shows: Show[] }) {

    const getShow = () => {
        console.log('next called')
        return true;
    }

    return (
      <>
       <div className="w-3/12 overflow-auto border-2 border-solid border-green-100">
            {shows.length > 0 ? (
                <InfiniteScroll
                    dataLength={shows.length}
                    hasMore={false} // or you can check if there are more shows to load
                    next={getShow}
                    loader={<h4>Loading...</h4>}
                >
                    {shows.map((curShow: Show) => (
                        <ShowCard key={curShow.show_id} show={curShow} />
                    ))}
                </InfiniteScroll>
            ) : (
                <p>Loading...</p>
            )}
        </div>

      </>
    );
}
