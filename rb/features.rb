# LslStatutoryEntitlements SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LslStatutoryEntitlementsFeatures
  def self.make_feature(name)
    case name
    when "base"
      LslStatutoryEntitlementsBaseFeature.new
    when "ratelimit"
      LslStatutoryEntitlementsRatelimitFeature.new
    when "retry"
      LslStatutoryEntitlementsRetryFeature.new
    when "test"
      LslStatutoryEntitlementsTestFeature.new
    when "timeout"
      LslStatutoryEntitlementsTimeoutFeature.new
    else
      LslStatutoryEntitlementsBaseFeature.new
    end
  end
end
