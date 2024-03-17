import { useEffect } from 'react';

export function SideBar() {
    useEffect(() => {
        async function getShowData() {
            try {
                const response = await fetch("http://127.0.0.1:8000/");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getShowData()
    }, []);    
    
    return (
      <>
        <div className="w-3/12 h-full border-2 border-solid border-green-100">SIDEBAR</div>
      </>
    );
}
