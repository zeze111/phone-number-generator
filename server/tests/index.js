import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../server";

const should = chai.should();

chai.use(chaiHttp);

describe("Empty data storage", () => {
  describe("when getting all numbers", () => {
    it("should return no numbers available message", done => {
      chai
        .request(server)
        .get("/telecomms/phone-numbers")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.body.status.should.equal("Successful");
          res.body.message.should.equal("No numbers available");
          done();
        });
    });
  });

  describe("when sorting all numbers", () => {
    it("should return no numbers available message", done => {
      chai
        .request(server)
        .get("/telecomms/phone-numbers/sort/:order")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.body.status.should.equal("Successful");
          res.body.message.should.equal("No numbers available");
          done();
        });
    });
  });

  describe("when deleting all numbers", () => {
    it("should return no numbers available message", done => {
      chai
        .request(server)
        .delete("/telecomms/phone-numbers")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(404);
          res.body.status.should.equal("Unsuccessful");
          res.body.message.should.equal("No numbers available to clear");
          done();
        });
    });
  });
});

describe("generate phone number", () => {
  it("should return a validation error message", done => {
    chai
      .request(server)
      .post("/telecomms")
      .send({ limit: "ten" })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(422);
        res.body.status.should.equal("Unsuccessful");
        res.body.message.should.equal("Limit must be a number");
        done();
      });
  });

  it("should return a new unique random phone number", done => {
    chai
      .request(server)
      .post("/telecomms")
      .send({ limit: 3000 })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.body.status.should.equal("Successful");
        done();
      });
  });

  it("should return a new unique random phone number", done => {
    chai
      .request(server)
      .post("/telecomms")
      .send({ limit: 3000 })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.body.status.should.equal("Successful");
        done();
      });
  });

  it("should return a storage full error message", done => {
    chai
      .request(server)
      .post("/telecomms")
      .send({ limit: 5000 })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(417);
        res.body.status.should.equal("Unsuccessful");
        res.body.message.should.equal(
          "Storage is full, cannot generate numbers"
        );
        done();
      });
  });
});

describe("get all phone numbers", () => {
  it("should return a list of numbers and total count", done => {
    chai
      .request(server)
      .get("/telecomms/phone-numbers")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.body.status.should.equal("Successful");
        done();
      });
  });
});

describe("Sort all phone numbers", () => {
  it("should return a list of sorted numbers", done => {
    chai
      .request(server)
      .get("/telecomms/phone-numbers/sort/ascending")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.body.status.should.equal("Successful");
        done();
      });
  });

  it("should return an error message for wrong request parameter", done => {
    chai
      .request(server)
      .get("/telecomms/phone-numbers/sort/order")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(406);
        res.body.status.should.equal("Unsuccessful");
        res.body.message.should.equal(
          "Must enter order of ascending or descending"
        );
        done();
      });
  });
});

describe("delete all phone numbers", () => {
  it("should return a list of numbers and total count", done => {
    chai
      .request(server)
      .delete("/telecomms/phone-numbers")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.body.status.should.equal("Successful");
        res.body.message.should.equal("All numbers have been cleared");
        done();
      });
  });
});
