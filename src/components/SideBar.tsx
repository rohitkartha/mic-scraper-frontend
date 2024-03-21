
import { useEffect, useState } from 'react';
import {ShowCard} from "~/components/ShowCard.tsx";
import type {Show} from "~/types/Show.ts"
import InfiniteScroll from 'react-infinite-scroll-component';

export function SideBar() {

    const [shows, setShows] = useState<Show[]>([]);

    const getShow = () => {
        console.log('next called')
        return true;
    }

    useEffect(() => {
        async function getShowData() : Promise<Show[] | undefined> {
            try {
                const response = await fetch("http://127.0.0.1:8000/");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json() as Show[];
                return data
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getShowData()
        .then(mappedData => {
            const showsFromData : Show[] = []
            if(mappedData){
                mappedData.map((element) => {
                    const currentShow : Show  = element;
                    showsFromData.push(currentShow)
                })
                setShows(showsFromData)
            }
        });
    }, []);    
    
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
