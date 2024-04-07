
import { useEffect, useState } from 'react';
import type {Show} from "~/types/Show.ts"
import {SideBar} from "~/components/SideBar.tsx";
import {Map} from "~/components/Map.tsx";

export function PageContainer() {

    const [shows, setShows] = useState<Show[]>([]);


    useEffect(() => {
        async function getShowData() : Promise<Show[] | undefined> {
            try {
                const params = new URLSearchParams({
 
                });
    
                const response = await fetch(`http://127.0.0.1:8000/shows/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json() as Show[];
                console.log(data)
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
        <div className="flex h-screen">
            <SideBar shows={shows}></SideBar>
            <Map shows={shows}></Map>
        </div>
      </>
    );
}
