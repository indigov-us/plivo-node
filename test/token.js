import assert from 'assert';
import sinon from 'sinon';
import {Client} from '../lib/rest/client-test';
import {PlivoGenericResponse} from '../lib/base.js';

let client = new Client('sampleid', 'sammpletoken', 'sampleproxy');

describe('Token', function () {
  it('should create token via interface', function () {
    return client.token.create('sampleid')
      .then(function (token) {
        assert.equal(token.token, 'created')
      })
  });
}
