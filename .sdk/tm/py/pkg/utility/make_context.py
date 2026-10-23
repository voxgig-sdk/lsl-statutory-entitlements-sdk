# LslStatutoryEntitlements SDK utility: make_context

from projectname_sdk.core.context import LslStatutoryEntitlementsContext


def make_context_util(ctxmap, basectx):
    return LslStatutoryEntitlementsContext(ctxmap, basectx)
