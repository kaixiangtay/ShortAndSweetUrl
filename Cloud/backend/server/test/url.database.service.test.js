import chai from "chai";
import sinon from "sinon";
import faker from "faker";
import UrlDatabaseService from "../src/services/url.database.service.js";
import UrlModel from "../src/models/url.model.js";

const expect = chai.expect;

describe("Url Database Service tests", function () {
    let stubValue;

    beforeEach(function () {
        stubValue = {
            longUrl: faker.internet.url(),
            shortUrl: faker.internet.url(),
            urlCode: faker.random.alphaNumeric(6),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
        };
    });

    it("saveNewUrl", async function () {
        const databaseService = new UrlDatabaseService();
        const stub = sinon.stub(UrlModel, "create").returns(stubValue);
        const url = await databaseService.saveNewUrl(stubValue.longUrl);

        expect(stub.calledOnce).to.be.true;
        expect(url.longUrl).to.equal(stubValue.longUrl);
        expect(url.shortUrl).to.equal(stubValue.shortUrl);
        expect(url.urlCode).to.equal(stubValue.urlCode);
        expect(url.createdAt).to.equal(stubValue.createdAt);
        expect(url.updatedAt).to.equal(stubValue.updatedAt);
    });

    it("findUrlByLongUrl", async function () {
        const databaseService = new UrlDatabaseService();
        const stub = sinon.stub(UrlModel, "findOne").returns(stubValue);
        const url = await databaseService.findUrlByLongUrl(stubValue.longUrl);

        expect(stub.calledOnce).to.be.true;
        expect(url.longUrl).to.equal(stubValue.longUrl);
        expect(url.shortUrl).to.equal(stubValue.shortUrl);
        expect(url.urlCode).to.equal(stubValue.urlCode);
        expect(url.createdAt).to.equal(stubValue.createdAt);
        expect(url.updatedAt).to.equal(stubValue.updatedAt);
    });
});
