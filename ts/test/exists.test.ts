
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LslStatutoryEntitlementsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LslStatutoryEntitlementsSDK.test()
    equal(testsdk instanceof LslStatutoryEntitlementsSDK, true,
      'LslStatutoryEntitlementsSDK.test() must return a client synchronously')
  })

})
