# LslStatutoryEntitlements SDK utility: make_context
require_relative '../core/context'
module LslStatutoryEntitlementsUtilities
  MakeContext = ->(ctxmap, basectx) {
    LslStatutoryEntitlementsContext.new(ctxmap, basectx)
  }
end
