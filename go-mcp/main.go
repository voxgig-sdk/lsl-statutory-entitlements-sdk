package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/lsl-statutory-entitlements-sdk/go"
)

func main() {
	transport := flag.String("transport", "stdio", "transport: stdio | http")
	addr := flag.String("addr", ":8080", "listen address for http transport")
	flag.Parse()

	// Configure from the environment: LSL_STATUTORY_ENTITLEMENTS_APIKEY carries the API key and
	// LSL_STATUTORY_ENTITLEMENTS_BASE optionally overrides the API base URL (e.g. production).
	// Both injectable by a secrets vault. Unset -> nil config defaults.
	var opts map[string]any
	if apikey := os.Getenv("LSL_STATUTORY_ENTITLEMENTS_APIKEY"); apikey != "" {
		opts = map[string]any{"apikey": apikey}
	}
	if base := os.Getenv("LSL_STATUTORY_ENTITLEMENTS_BASE"); base != "" {
		if opts == nil {
			opts = map[string]any{}
		}
		opts["base"] = base
	}
	client := sdk.NewLslStatutoryEntitlementsSDK(opts)
	server := mcp.NewServer(
		&mcp.Implementation{
			Name:    "lsl-statutory-entitlements",
			Version: "0.0.1",
		},
		nil,
	)
	registerTools(server, client)

	switch *transport {
	case "stdio":
		if err := server.Run(context.Background(), &mcp.StdioTransport{}); err != nil {
			log.Fatalf("stdio server: %v", err)
		}
	case "http":
		handler := mcp.NewStreamableHTTPHandler(
			func(r *http.Request) *mcp.Server { return server },
			nil,
		)
		log.Printf("MCP streamable HTTP server listening on %s", *addr)
		if err := http.ListenAndServe(*addr, handler); err != nil {
			log.Fatalf("http server: %v", err)
		}
	default:
		fmt.Fprintf(os.Stderr, "unknown transport %q (want stdio | http)\n", *transport)
		os.Exit(2)
	}
}
