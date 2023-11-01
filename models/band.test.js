const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

const { Band } = require('./Band')

describe('Band Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes' });
        expect(testBand.name).toBe('Yes');
     })

     test('can update a Band instance', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes' });
        await testBand.update({
            name: 'No'
        })
        expect(testBand.name).toBe('No')
     })
     test('can delete a Band instance', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Yes' });
        await testBand.destroy()

        const doesExist = await Band.findByPk(testBand.id)
        expect(doesExist).toBeFalsy();
     })
})
