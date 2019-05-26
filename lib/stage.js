
class StageVarsPlugin {

  async env(ctx, next) {
    if (ctx.event.stageVariables) {
      Object.assign(ctx.env, ctx.event.stageVariables)
    }
    await next()
  }
}

module.exports = StageVarsPlugin