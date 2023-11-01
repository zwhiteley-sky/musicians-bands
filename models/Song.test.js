const { sequelize } = require("../db");
const { Song } = require("./Song");

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

test("can create Song", async () => {
    const song = await Song.create({
        title: "Cruel Summer",
        year: 2023,
        length: 2.0
    });

    expect(song.title).toBe("Cruel Summer");
    expect(song.year).toBe(2023);
    expect(song.length).toBe(2.0);
    expect((await Song.findAll()).length).toBe(1);
});

test("can update Song", async () => {
    {
        const song = await Song.create({
            title: "Once in a Lifetime",
            year: 1990,
            length: 234
        });

        await song.update({
            length: 2
        });
    }   

    const song = await Song.findByPk(1);

    expect(song.title).toBe("Once in a Lifetime");
    expect(song.year).toBe(1990);
    expect(song.length).toBe(2);
});

test("can delete Song", async () => {
    await Song.create({
        title: "filler-1",
        year: 1990,
        length: 2
    });
    await Song.create({
        title: "delete-me",
        year: 1998,
        length: 3.4
    });
    await Song.create({
        title: "filler-2",
        year: 2003,
        length: 1.2
    });

    const song = await Song.findOne({
        where: { title: "delete-me" }
    });

    await song.destroy();

    expect((await Song.findAll()).length).toBe(2);
});
