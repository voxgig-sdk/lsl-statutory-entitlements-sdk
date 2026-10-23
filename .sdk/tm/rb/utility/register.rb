# LslStatutoryEntitlements SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LslStatutoryEntitlementsUtility.registrar = ->(u) {
  u.clean = LslStatutoryEntitlementsUtilities::Clean
  u.clean_add = LslStatutoryEntitlementsUtilities::CleanAdd
  u.clean_explain = LslStatutoryEntitlementsUtilities::CleanExplain
  u.done = LslStatutoryEntitlementsUtilities::Done
  u.make_error = LslStatutoryEntitlementsUtilities::MakeError
  u.feature_add = LslStatutoryEntitlementsUtilities::FeatureAdd
  u.feature_hook = LslStatutoryEntitlementsUtilities::FeatureHook
  u.feature_init = LslStatutoryEntitlementsUtilities::FeatureInit
  u.fetcher = LslStatutoryEntitlementsUtilities::Fetcher
  u.make_fetch_def = LslStatutoryEntitlementsUtilities::MakeFetchDef
  u.make_context = LslStatutoryEntitlementsUtilities::MakeContext
  u.make_options = LslStatutoryEntitlementsUtilities::MakeOptions
  u.make_request = LslStatutoryEntitlementsUtilities::MakeRequest
  u.make_response = LslStatutoryEntitlementsUtilities::MakeResponse
  u.make_result = LslStatutoryEntitlementsUtilities::MakeResult
  u.make_point = LslStatutoryEntitlementsUtilities::MakePoint
  u.make_spec = LslStatutoryEntitlementsUtilities::MakeSpec
  u.make_url = LslStatutoryEntitlementsUtilities::MakeUrl
  u.param = LslStatutoryEntitlementsUtilities::Param
  u.prepare_auth = LslStatutoryEntitlementsUtilities::PrepareAuth
  u.prepare_body = LslStatutoryEntitlementsUtilities::PrepareBody
  u.prepare_headers = LslStatutoryEntitlementsUtilities::PrepareHeaders
  u.prepare_method = LslStatutoryEntitlementsUtilities::PrepareMethod
  u.prepare_params = LslStatutoryEntitlementsUtilities::PrepareParams
  u.prepare_path = LslStatutoryEntitlementsUtilities::PreparePath
  u.prepare_query = LslStatutoryEntitlementsUtilities::PrepareQuery
  u.graphql_body = LslStatutoryEntitlementsUtilities::GraphqlBody
  u.graphql_errors = LslStatutoryEntitlementsUtilities::GraphqlErrors
  u.result_basic = LslStatutoryEntitlementsUtilities::ResultBasic
  u.result_body = LslStatutoryEntitlementsUtilities::ResultBody
  u.result_headers = LslStatutoryEntitlementsUtilities::ResultHeaders
  u.transform_request = LslStatutoryEntitlementsUtilities::TransformRequest
  u.transform_response = LslStatutoryEntitlementsUtilities::TransformResponse
}
