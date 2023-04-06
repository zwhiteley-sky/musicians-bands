![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Musicians and Bands Database
Rock on, dude! We're going to build Band/Musician organizer.

We’ll have 2 database models:
- Musicians
- Bands

We will be working on this across multiple days. **The work on this repository will be split across two days**

## Day 1: Database Creation

### Installing Dependencies and Running Tests
1. Once the forked repository has been cloned, make sure to run:
```shell
npm install
```

2. Additionally, you’ll need to create the following file in the root of the project: `db.sqlite`. This database file is considered sensitive in nature, so it will not be pushed up to a repository when the project is pushed.
3. To run the tests, run `npm test`. The test file is created, but each test is currently empty. Initially, you’ll get many errors and messages like `Test suite failed to run since there are missing parts`.

### `Band`, `Musician`, `Song`, and Tests
> Code in all the spots where it says TODO in the project (you can [search across files](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) to find the spots to edit!). Below are the instructions:

1. In `db.js`, create a new sequelize connection.
2. In `/models/Band.js`, define a `Band` model. The `Band` model should have the following properties:
  - `name`: a string
  - `genre`: a string
3. In `/models/Musician.js`, define a `Musician` model. The `Musician` model should have the following properties:
  - `name`: a string
  - `instrument`: a string
4. In `/models/Song.j`s, define a `Song` model. The `Song` model should have the following properties:
  - `title`: a string
  - `year`: a number
  - `length`: a number
5. Now that we have our models defined, it is time to create some tests in `index.test.js` to verify that our models function as intended. Create tests that do the following:
  - Can create a new `Band`
  - Can create a new `Musician`
  - Can create a new `Song`
  - Can update a `Band` instance
  - Can update a `Musician` instance
  - Can update a `Song` instance
  - Can delete a `Band` instance
  - Can delete a `Musician` instance
  - Can delete a `Song` instance

```javascript
test('can create a Band', async () => {
    const testUser = await User.create({ name: 'George', password: '123' });
    expect(testUser.name).toBe('George');
}
```

### Extensions 🚀

1. Add a `showCount` property to the `Band` model (number) and account for the new column in the tests.
2. Implement data seeding to populate the `Band`, `Musician`, and `Song` models with initial data using `bulkCreate()`. 
3. Research the provided [increment and decrement methods](https://sequelize.org/docs/v6/core-concepts/model-instances/#incrementing-and-decrementing-integer-values). Create tests to verify that you can increment and decrement
4. [Research how to create instance methods with Sequelize](https://sebhastian.com/sequelize-instance-methods/). Create some instance methods and tests to verify that they work as intended. A few instance methods to consider:
  - A `toString()` method that converts the data stored into a simple string like Band: Queen Genre: Rock. 
  - A `toMinutes()` method for the Song model that takes the duration in seconds and returns the number of minutes.
  - A `getLongestSong()` model for the Song model that returns the song with the longest duration.

## Day 2: Associations

### One-to-Many Associations
- In the `./index.js` file, before the `module.exports`, associate the two models. **Multiple musicians can be added to a Band.**
- Add a test to account for the association
- Run `npm test`. Write a test to add multiple musicians to a band. In the test:
  - `Band.findAll()` to get the bands (if there aren’t any from the previous tests, you’ll have to `Band.create()` some!)
  - For each of the bands, use something like `foundBand.getMusicians()` to check that they have been added correctly!
- `git add .`, `git commit -a “somemessage”`, and `git push` so we can see your work!

### Many-to-Many Associations
- In the `./index.js` file, before the `module.exports`, associate the `Song` and `Band` models.
  - Multiple songs can be added to a Band
  - Multiple bands can have the same Song
- Add another test to account for the association

#### Association Tests
- Run `npm test`
- Write a test to add multiple musicians to a band. In the test:
  - `Band.create()` to make some bands. Use the data you’ve added in previous tests you’ve created!
  - Create at least 2 songs
  - For one band, add both songs
  - For each of the songs, use something like `foundBand.getSongs()` to check that they have been added correctly!
  - Do the same with the bands

### Stretch: Eager Loading 🚀
- Run `npm test`
- Create test data and associate the models as in previous tests.
- Find all the Bands
- In the `Band.findAll()` call, include the `Musician` model.
- Do the same again, but this time include the `Song` model.
- Test the output

### Stretch: `Manager` 🚀
- Create a new model called `Manager` that will represent the person managing a `Band` has made. `Manager` can have properties of your choice, but a few you may want to add:
  - `name`: a string
  - `email`: a string
  - `salary`: a number
  - `dateHired`: a date
- In the `./index.js` file, before the `module.exports`, associate the two models.
  - A single `Band` can be added to a `Manager`
  - A single `Manager` can be added to a `Band`.
- Write a test to add a manager to a band.

### Stretch: `Album`
- Create a new model called `Album` that will represent an `Album` that can contain many `Song` instances. `Album` can have properties of your choice, but a few you may want to add:
  - `title`: a string
  - `releaseDate`: a date
  - `duration`: a string
- In the `./index.js` file, before the `module.exports`, associate the `Song` and `Album` models.
  - Multiple `Song` instances can be added to a `Band`
  - Multiple `Band` instances can have the same `Song`