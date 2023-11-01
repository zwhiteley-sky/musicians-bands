const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize')

const { Musician } = require('./Musician')

describe('Musician Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({ name: 'Yes', instrument: 'Piano' });
        expect(testMusician.name).toBe('Yes');
     })

     test('can update a Musican instance', async () => {
        const testMusician = await Musician.create({ name: 'Yes', instrument: 'Piano' });
        await testMusician.update({
            instrument: 'Guitar'
        })
        expect(testMusician.instrument).toBe('Guitar')
     })
     test('can delete a Musician instance', async () => {
        const testMusician = await Musician.create({ name: 'Yes', instrument: 'Piano' });
        await testMusician.destroy()

        const doesExist = await Musician.findByPk(testMusician.id)
        expect(doesExist).toBeFalsy();
     })
})
