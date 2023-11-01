const { Song } = require("./models/Song");
const { Musician } = require("./models/Musician");
const { Band } = require("./models/Band");

const songs = require("./seeds/Song.json");
const musicians = require("./seeds/Musician.json");
const bands = require("./seeds/Band.json");

(async function () {
    await Band.bulkCreate(bands);
    await Musician.bulkCreate(musicians);
    await Song.bulkCreate(songs);
})();
