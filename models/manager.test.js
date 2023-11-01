const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

const { Band, Manager } = require('..')

describe('Manager Association Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('Adds manager to the band', async () => {
        let testBand = await Band.create({name: 'cool-band', genre: 'rock', showCount: 1000})
        await testBand.createManager({name: 'Jordan', email: 'Jordan@Managers.com', salary: 32000, dateHired: '2006'})

        testBand = await Band.findByPk(testBand.id, {include: Manager})

        expect(testBand.manager.name).toBe('Jordan')
        expect(testBand.manager.email).toBe('Jordan@Managers.com')
    })
})