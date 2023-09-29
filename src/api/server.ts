const token = 'a3b8e02086ec08e2941154a67e9c5662547a0cb1594a66c7'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-bs48.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Data Fetch failed!')
        }

        return await response.json()
    },

    create:async (data: any = {}) => {
        const response = await fetch(`https://car-collection-bs48.onrender.com/api/cars`,
        {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            console.log("Failed to create new data server");   
        }

        return await response.json()
    },

    update:async (id:string, data: any) => {
        const response = await fetch(`https://car-collection-bs48.onrender.com/api/cars/${id}`,
        {
            method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error("Failed to create new data server");   
        }

        return await response.json()
    },

    delete:async (id:string) => {
        const response = await fetch(`https://car-collection-bs48.onrender.com/api/cars/${id}`,
        {
            method: 'DELETE' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        
        if (!response.ok) {
            throw new Error("Failed to create new data server");   
        }

        return;
    },

    
}