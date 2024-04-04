
import GoogleMapReact from 'google-map-react';
import { env } from "~/env";


export function Map() {
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
            <GoogleMapReact
                bootstrapURLKeys={{ key: env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
      </>
    );
}
  