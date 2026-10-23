

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LslStatutoryEntitlementsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CalculatorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LSL_STATUTORY_ENTITLEMENTS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LSL_STATUTORY_ENTITLEMENTS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LslStatutoryEntitlementsSDK.test()
    const ent = testsdk.Calculator()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LslStatutoryEntitlementsSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Calculator().create({"state":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LSL_STATUTORY_ENTITLEMENTS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'calculator.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"state":{"a":true,"h":"State","n":"state","r":false,"sh":"Which state's long service leave law applies?","t":"`$STRING`","key$":"state","index$":0},"weeklyPay":{"a":true,"h":"Weekly Pay","n":"weeklyPay","r":false,"sh":"Ordinary weekly pay","t":"`$NUMBER`","key$":"weeklyPay","index$":1},"weeksTaken":{"a":true,"h":"Weeks Taken","n":"weeksTaken","r":false,"sh":"Long service leave already taken","t":"`$NUMBER`","key$":"weeksTaken","index$":2},"years":{"a":true,"h":"Years","n":"years","r":false,"sh":"Continuous service with this employer","t":"`$NUMBER`","key$":"years","index$":3}},"name":"calculator","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["state","weeklyPay","weeksTaken","years"],"co":{"id":"POST /mcp/tools/calculate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculate","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculate"}],"t":{"req":{"state":"`reqdata.state`","weeklyPay":"`reqdata.weekly_pay`","weeksTaken":"`reqdata.weeks_taken`","years":"`reqdata.year`"},"res":"`body`"},"index$":0},{"a":true,"bf":false,"co":{"id":"POST /mcp/tools/calculator_describe","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculator_describe","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculator_describe"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"calculator","name__orig":"calculator","Name":"Calculator","name_":"calculator","name-":"calculator","NAME":"CALCULATOR","index$":0}, {"active":true,"entity":"calculator","key$":"BasicCalculatorFlow","kind":"basic","name":"BasicCalculatorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"calculator_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Calculator', {"POST /mcp/tools/calculate":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"state":{"type":"string","enum":["NSW","VIC","QLD"],"description":"Which state's long service leave law applies?","default":"VIC","key$":"state"},"years":{"type":"number","minimum":0,"maximum":50,"description":"Continuous service with this employer","default":7.5,"key$":"years"},"weeksTaken":{"type":"number","minimum":0,"maximum":60,"description":"Long service leave already taken","default":0,"key$":"weeksTaken"},"weeklyPay":{"type":"number","minimum":0,"maximum":20000,"description":"Ordinary weekly pay","default":1600,"key$":"weeklyPay"}},"additionalProperties":false,"index$":1}}}},"parameters":[]},"POST /mcp/tools/calculator_describe":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{},"index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const calculator_ref01_ent = client.Calculator()
    let calculator_ref01_data = setup.data.new.calculator['calculator_ref01']

    calculator_ref01_data = (await calculator_ref01_ent.create(calculator_ref01_data)).data()
    assert(null != calculator_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/calculator/CalculatorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LslStatutoryEntitlementsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['calculator01','calculator02','calculator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LSL_STATUTORY_ENTITLEMENTS_TEST_CALCULATOR_ENTID': idmap,
    'LSL_STATUTORY_ENTITLEMENTS_TEST_LIVE': 'FALSE',
    'LSL_STATUTORY_ENTITLEMENTS_TEST_EXPLAIN': 'FALSE',
    'LSL_STATUTORY_ENTITLEMENTS_APIKEY': '',
  })

  idmap = env['LSL_STATUTORY_ENTITLEMENTS_TEST_CALCULATOR_ENTID']

  const live = 'TRUE' === env.LSL_STATUTORY_ENTITLEMENTS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LSL_STATUTORY_ENTITLEMENTS_TEST_CALCULATOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LslStatutoryEntitlementsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.LSL_STATUTORY_ENTITLEMENTS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LSL_STATUTORY_ENTITLEMENTS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
