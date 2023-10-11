const data = [
    {
        id:0,
        name: 'Esteem',
        pickup:"Bandipora",
        destination: "Srinagar",
        distance: 56,
        price: 1200,
        img: 'https://media.istockphoto.com/id/492362277/photo/3d-yellow-taxi.jpg?b=1&s=612x612&w=0&k=20&c=WOMG2f0-nZzowkt0jINwwnqXefUP-DYjLtt-o9N_8i8=',
        type: 'Economy',
    },

    {
        id:1,
        name: 'Innova',
        pickup:"Bandipora",
        destination: "Sopore",
        distance: 30,
        price: 700,
        img: 'https://img.freepik.com/free-vector/isometric-car-icon-checkered-cab-isolated-white_107791-129.jpg',
        type: 'Luxury',
    },

    {
        id:2,
        name: 'Safari',
        pickup:"Bandipora",
        destination: "Ganderbal",
        distance: 40,
        price: 800,
        img: 'data:image/jpeg;base64,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',
        type: 'premium',
    },
    {
        id:3,
        name: 'SUV Automatic',
        pickup:"Bandipora",
        destination: "Sonamarg",
        distance: 100,
        price: 3000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHykwDC6bqxESFNJK7WG35ifXN55GywCaxQ&usqp=CAU',
        type: 'Economy',
    },
    {
        id:4,
        name: 'Safari top',
        pickup:"Bandipora",
        destination: "Pulwama",
        distance: 100,
        price: 3000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8c9lSNfmgvWxZXGDDx1fCasvo5XzD7gv8yQ&usqp=CAU',
        type: 'premium',
    }
];

export default data;