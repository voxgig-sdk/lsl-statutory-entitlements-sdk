<?php
declare(strict_types=1);

// LslStatutoryEntitlements SDK utility: result_headers

class LslStatutoryEntitlementsResultHeaders
{
    public static function call(LslStatutoryEntitlementsContext $ctx): ?LslStatutoryEntitlementsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
