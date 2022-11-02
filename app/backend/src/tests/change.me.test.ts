import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

// describe('Seu teste', () => {
/**
 * Exemplo do uso de stubs com tipos
 */

// let chaiHttpResponse: Response;

// before(async () => {
//   sinon
//     .stub(Example, "findOne")
//     .resolves({
//       ...<Seu mock>
//     } as Example);
// });

// after(()=>{
//   (Example.findOne as sinon.SinonStub).restore();
// })

// it('...', async () => {
//   chaiHttpResponse = await chai
//      .request(app)
//      ...

//   expect(...)
// });

// it('Seu sub-teste', () => {
//   expect(false).to.be.eq(true);
// });
// });
describe('Teste da rota básica "/"', () => {
  describe('quando a requisição é feita com sucesso', () => {
    it('deve retornar a messagem "ok"', async () => {
      const httpResponse = await chai.request(app).get('/');
      expect(httpResponse.body).to.deep.equal({ ok: true });
    });
  });
});
