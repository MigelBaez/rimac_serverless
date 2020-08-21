const  { mapperList } = require('../src/components/mapper.component');
const planetMapper = require('../src/mappers/planet.mapper');
const fs = require('fs');
const path = require('path');

const openJSONFile = (fileName) => {
    const pathJson = path.resolve(__dirname, fileName);
    const rawItem = fs.readFileSync(pathJson);
    return JSON.parse(rawItem);
};

describe('Test Mapper Component', () => {
    describe('Test Functions Mapper Component', () => {

        it('Test mapperList', async () => {
            const planets = openJSONFile('../test/data/planet.data.fake.json');
            const planetsExpect = openJSONFile('../test/data/planet.expect.fake.json');
            const { results} = planets;
            const result = await mapperList(results, planetMapper);
            expect(JSON.stringify(result)).toEqual(JSON.stringify(planetsExpect.results));
        });


    });
});
