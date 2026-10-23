# LslStatutoryEntitlements SDK exists test

import pytest
from lslstatutoryentitlements_sdk import LslStatutoryEntitlementsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LslStatutoryEntitlementsSDK.test(None, None)
        assert testsdk is not None
