const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

const { Band, Musician } = require('..')

describe('Band Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        let testBand = await Band.create({ name: 'Yes', genre: 'Yes', showCount: 15 });
        
        await testBand.createMusician({
            name: "Zachary",
            instrument: "Triangle"
        });

        expect(testBand.name).toBe('Yes');
        expect(testBand.genre).toBe('Yes');
        expect(testBand.showCount).toBe(15);

        // SELECT ... JOIN
        testBand = await Band.findByPk(testBand.id, {
            include: Musician
        });

        console.log(testBand);

        expect(testBand.musicians[0].name).toBe("Zachary");
     })

     test('can update a Band instance', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes', showCount: 15 });
        await testBand.update({
            name: 'No'
        })
        expect(testBand.name).toBe('No')
     })
     test('can delete a Band instance', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes', showCount: 15 });
        await testBand.destroy()

        const doesExist = await Band.findByPk(testBand.id)
        expect(doesExist).toBeFalsy();
     })
     test('can increment showCount', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes', showCount: 15 });
        await testBand.increment({
            'showCount': 5
        })
        expect((await Band.findByPk(testBand.id)).showCount).toBe(20)
     })
})
