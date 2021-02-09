# TypeScript Lambda GraphQL Hello World Example with SAM Cli


## Get started

Make sure that SAM CLI is installed.

1. Build

```bash
sam build
```

2. Testing lambda locally

```bash
# We first build and copy dist files into .aws-sam
yarn pre-deploy

# With an example event data - this works
sam local invoke

# Startup API Gateway and Lambda in a container
sam local start-api

# Test with curl
curl -X POST http://127.0.0.1:3000/graphql --data '{"query": "{hello}"}'
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/profile`

3. Deploy the function

We first need to build the template, compile TypeScript and copy the dist folder, then deploy. We can override any default config in samconfig.toml file.

```bash
yarn pre-deploy
sam deploy --s3-bucket test.lambdafunction.bucket --s3-prefix simpleapiproxy
```

4. Clean up the function

```bash
aws cloudformation delete-stack --stack-name ts-graphql-hellow-world-sam-cli
```

# Sam Configuration

There are two configuration files for SAM in this example

- template.yaml

- samconfig.toml
  - This file is a project-level configuration file that stores default parameters.
