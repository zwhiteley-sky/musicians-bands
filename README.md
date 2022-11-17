![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Musicians and Bands Database
Rock on, dude! We're going to build Band/Musician organizer.

We’ll have 2 database models:
- Musicians
- Bands

## Part 1

### Installing Dependencies and Running Tests
1. Once the forked repository has been cloned, make sure to run `npm install`. This will install all dependencies. 
2. Additionally, you’ll need to create the following file in the root of the project: `db.sqlite`. This database file is considered sensitive in nature, so it will not be pushed up to a repository when the project is pushed.
3. To run the tests, run `npm test`. The test file is created, but each test is currently empty. Initially, you’ll get many errors and messages like `Test suite failed to run since there are missing parts`. Let’s get to that!

### TODOs: Database Creation and Tests
- Code in all the spots where it says TODO in the project (you can [search across files](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) to find the spots to edit!). Below are the instructions:
  - Create the new sequelize connection
  - Define the Band model
  - Define the Musician model
  - Test creating a band
  - Test creating a musician
- **TIP**: When testing your code you will need to first create and band or musician and then verify that it has been added. For example, a test with a User database, may look something like:
```javascript
test('can create a Band', async () => {
    const testUser = await User.create({ name: 'George', password: '123' });
    expect(testUser.name).toBe('George');
}
```
### Connection
- In `db.js`, The connection will have to be instantiated using `new Sequelize()`

### Models
- Define the models! Here are the details:
  - The `Musician` model should have name and instrument properties, both of which are strings.
  - The Band model should have name and genre properties, both of which are strings.

### Tests
- At this point, we can start writing the tests!  Fill out each of the tests in the suite, following the instructions provided.

### Commit & Push
- Always remember to `git add .`, `git commit -m “somemessage”`, and `git push` so we can see your work!
