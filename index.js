const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")

async function main() {
    // Band Musician relationship
    await Band.hasMany(Musician);
    await Musician.belongsTo(Band);

    await Musician.belongsToMany(Song, { through: "SongMusician" });
    await Song.belongsToMany(Musician, { through: "SongMusician" });
}

main();

module.exports = {
    Band,
    Musician,
    Song
};
