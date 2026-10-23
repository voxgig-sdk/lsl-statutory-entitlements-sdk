-- LslStatutoryEntitlements SDK error

local json = require("dkjson")

local LslStatutoryEntitlementsError = {}
LslStatutoryEntitlementsError.__index = LslStatutoryEntitlementsError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function LslStatutoryEntitlementsError.new(code, msg, ctx)
  local self = setmetatable({}, LslStatutoryEntitlementsError)
  self.is_sdk_error = true
  self.sdk = "LslStatutoryEntitlements"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function LslStatutoryEntitlementsError:context()
  return CONTEXT[self]
end


function LslStatutoryEntitlementsError:error()
  return self.msg
end


function LslStatutoryEntitlementsError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function LslStatutoryEntitlementsError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function LslStatutoryEntitlementsError:to_json()
  return json.encode(self:to_table())
end


function LslStatutoryEntitlementsError:__tostring()
  return self.msg
end


function LslStatutoryEntitlementsError.__tojson(self)
  return self:to_json()
end


return LslStatutoryEntitlementsError
