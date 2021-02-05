# TypeScript Lambda GraphQL Hello World Example with SAM Cli


## Get started

Make sure that SAM CLI is installed.

1. Build

```bash
sam build
```

2. Testing lambda locally

```bash
# With an example event data - this works
sam local invoke

# Or we can be a bit more specific

# Startup API Gateway and Lambda in a container
sam local start-api

# Test with curl
curl -X POST http://localhost:3000/test/graphql/hello --data '{"query": "{hello}"}'
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/profile`

3. Deploy the function

