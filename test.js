const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Server', () => {
  it('should return "Hello, World!" when / endpoint is accessed', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});

