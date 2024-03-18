# @stable-canvas/civitai-rest-api-client
civitai rest api client for js

This is a lightweight, type-safe JavaScript/TypeScript library for interacting with the Civitai REST API. It supports both web browsers and Node.js environments.

## Features

- **Small Footprint**: The library has a minimal dependency footprint, making it suitable for use in various project environments.
- **Type Safety**: Written in TypeScript, the library provides type safety and better tooling support, reducing runtime errors and improving developer experience.
- **Cross-Platform**: The library can be used in both web browsers (via bundlers like Webpack or Rollup) and Node.js environments.

## Installation

Using npm:

```bash
npm install @stable-canvas/civitai-rest-api-client
```

Using yarn:

```bash
yarn add @stable-canvas/civitai-rest-api-client
```

## Usage

```typescript
import "./ensure-fetch"; // Required for NodeJS
import { CivitaiRESTAPIClient } from "@stable-canvas/civitai-rest-api-client";

const client = new CivitaiRESTAPIClient();
const models = await client.default.getModels({
    nsfw: false,
    limit: 5,
});
console.log(models);
```

> full example in `/examples` folder

## Supported Endpoints

This library is implemented based on the [Civitai REST API Reference](https://github.com/civitai/civitai/wiki/REST-API-Reference). The following endpoints are supported:

### Creators

- `getCreators`

### Images

- `getImages`

### Models

- `getModels`
- `getModels1`

### Model Versions

- `getModelVersions`
- `getModelVersionsByHash`

### Tags

- `getTags`

For detailed information on the parameters and response types for each endpoint, please refer to the [Civitai REST API Reference](https://github.com/civitai/civitai/wiki/REST-API-Reference).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).