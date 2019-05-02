import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../server";

const should = chai.should();

chai.use(chaiHttp);

describe("generate phone number", () => {
  it("should return a new unique random phone number", done => {
    chai
      .request(server)
      .post("/telecomms/")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.body.status.should.equal("Successful");
        done();
      });
  });
});
