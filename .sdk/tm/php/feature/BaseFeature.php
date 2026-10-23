<?php
declare(strict_types=1);

// LslStatutoryEntitlements SDK base feature

class LslStatutoryEntitlementsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LslStatutoryEntitlementsContext $ctx, array $options): void {}
    public function PostConstruct(LslStatutoryEntitlementsContext $ctx): void {}
    public function PostConstructEntity(LslStatutoryEntitlementsContext $ctx): void {}
    public function SetData(LslStatutoryEntitlementsContext $ctx): void {}
    public function GetData(LslStatutoryEntitlementsContext $ctx): void {}
    public function GetMatch(LslStatutoryEntitlementsContext $ctx): void {}
    public function SetMatch(LslStatutoryEntitlementsContext $ctx): void {}
    public function PrePoint(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreSpec(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreRequest(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreResponse(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreResult(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreDone(LslStatutoryEntitlementsContext $ctx): void {}
    public function PreUnexpected(LslStatutoryEntitlementsContext $ctx): void {}
}
