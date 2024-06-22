export const flightoffers = async () =>{
    try{
        const response = await fetch (
            ` https://academics.newtonschool.co/api/v1/bookingportals/offers`,
            {
                method: 'GET',
                headers: {
                    projectid:"wniajom2ck2s",
                    authorization:``
                }
            }
        )
    }
}