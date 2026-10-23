# LslStatutoryEntitlements SDK utility: prepare_body
require_relative 'media'
module LslStatutoryEntitlementsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LslStatutoryEntitlementsUtilities.raw_body(ctx.reqdata) if LslStatutoryEntitlementsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
