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

3. Local Development

This will enable the change in the local API endpoint as we develop.

```bash
yarn webpack --watch
sam local start-api
```

Alternatively, we can use `hivemind` to run above two processes in a single terminal session. The repo is set up with `Procfile` and the command below will do the job.

```bash
hivemind
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/profile`.

For troubleshooting for Apollo Server, we have local Apollo server which can be run by `yarn local-graphql`.

3. Deploy the function

We first need to build the template, compile TypeScript and copy the dist folder, then deploy. We can override any default config in samconfig.toml file.

```bash
yarn pre-deploy
sam deploy --s3-bucket test.lambdafunction.bucket --s3-prefix simpleapiproxy
```

4. Clean up the function

```bash
aws cloudformation delete-stack --stack-name ts-graphql-hello-world-sam-cli
```

# Sam Configuration

There are two configuration files for SAM in this example

- template.yaml

- samconfig.toml
  - This file is a project-level configuration file that stores default parameters.
