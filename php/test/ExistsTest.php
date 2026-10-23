<?php
declare(strict_types=1);

// LslStatutoryEntitlements SDK exists test

require_once __DIR__ . '/../lslstatutoryentitlements_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LslStatutoryEntitlementsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
