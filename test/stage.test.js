const StageVarsPlugin = require('../lib/stage')

describe('Essentials', async () => {
  let ctx = { }
  let noop = () => { }
  let plugin = null
  beforeEach(() => {
    ctx = {
      event: { },
      env: { }
    }
    plugin = new StageVarsPlugin()
  })
  it ('should copy stageVariables to ctx.env', async () => {
    ctx.event.stageVariables = { 
      'HELLO': 'world',
      'FOO': 'bar'
    }
    await plugin.env(ctx, noop)
    expect(ctx).toMatchObject({
      env: {
        'HELLO': 'world',
        'FOO': 'bar'
      }
    })
  })
  it ('should overwrite existing env values', async () => {
    ctx.env = { 'HELLO': 'world' }
    ctx.event.stageVariables = { 'HELLO': 'daniel' }
    await plugin.env(ctx, noop)
    expect(ctx).toMatchObject({
      env: { 'HELLO': 'daniel' }
    })
  })
  it ('should noop if no stageVariables', async () => {
    await plugin.env(ctx, noop)
    expect(ctx.env).toEqual({})
  })
})
