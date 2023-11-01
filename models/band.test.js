const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

const { Band } = require('./Band')

describe('Band Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes', showCount: 15 });
        expect(testBand.name).toBe('Yes');
        expect(testBand.genre).toBe('Yes');
        expect(testBand.showCount).toBe(15);
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