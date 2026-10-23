<?php
declare(strict_types=1);

// LslStatutoryEntitlements SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LslStatutoryEntitlementsMakeContext
{
    public static function call(array $ctxmap, ?LslStatutoryEntitlementsContext $basectx): LslStatutoryEntitlementsContext
    {
        return new LslStatutoryEntitlementsContext($ctxmap, $basectx);
    }
}
