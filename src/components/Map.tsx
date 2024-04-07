
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-maps-react-markers'

import { env } from "~/env";
import type {Show} from "~/types/Show.ts"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function Map({ shows }: { shows: Show[] }) {
    const defaultProps = {
        center: {
          lat: 38.8781,
          lng: -78.6298
        },
        zoom: 5
    };
    
    return (
      <>
        <div className="w-full h-full pb-14 border">
            <GoogleMap
                apiKey={env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            {shows?.map((show: Show) => (
            <AnyReactComponent
              key={show.show_id}
              lat={show.show_lat}
              lng={show.show_long}
              text="My Marker"
            />
            ))}
            </GoogleMap>
        </div>
      </>
    );
}
  