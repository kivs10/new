JSC.chart('chartDiv', {
    type: 'column',
    series: [
        {
            name: 'cellphone',
            points: [
                { x: 'Infinix', y: 70 },
                { x: 'Vivo', y: 56 },
                { x: 'Realme', y: 63 },
            ]
        },
        {
            name: 'Guitar',
            points: [
                { x: 'Yamaha', y: 55 },
                { x: 'Ibanez', y: 55 },
                { x: 'Taylor', y: 70 },
            ]
        },
        {
            name: 'laptop',
            points: [
                { x: 'Acer', y: 70 },
                { x: 'HP', y: 50 },
                { x: 'Lenovo', y: 90 },
            ]
        }
    ]
});
