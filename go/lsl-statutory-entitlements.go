package voxgiglslstatutoryentitlementssdk

import (
	"github.com/voxgig-sdk/lsl-statutory-entitlements-sdk/go/core"
	"github.com/voxgig-sdk/lsl-statutory-entitlements-sdk/go/entity"
	"github.com/voxgig-sdk/lsl-statutory-entitlements-sdk/go/feature"
	_ "github.com/voxgig-sdk/lsl-statutory-entitlements-sdk/go/utility"
)

// Type aliases preserve external API.
type LslStatutoryEntitlementsSDK = core.LslStatutoryEntitlementsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LslStatutoryEntitlementsEntity = core.LslStatutoryEntitlementsEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LslStatutoryEntitlementsError = core.LslStatutoryEntitlementsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCalculatorEntityFunc = func(client *core.LslStatutoryEntitlementsSDK, entopts map[string]any) core.LslStatutoryEntitlementsEntity {
		return entity.NewCalculatorEntity(client, entopts)
	}
	core.NewEnquiryEntityFunc = func(client *core.LslStatutoryEntitlementsSDK, entopts map[string]any) core.LslStatutoryEntitlementsEntity {
		return entity.NewEnquiryEntity(client, entopts)
	}
	core.NewMcpEntityFunc = func(client *core.LslStatutoryEntitlementsSDK, entopts map[string]any) core.LslStatutoryEntitlementsEntity {
		return entity.NewMcpEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLslStatutoryEntitlementsSDK = core.NewLslStatutoryEntitlementsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLslStatutoryEntitlementsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LslStatutoryEntitlementsSDK  { return NewLslStatutoryEntitlementsSDK(nil) }
func Test() *LslStatutoryEntitlementsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
