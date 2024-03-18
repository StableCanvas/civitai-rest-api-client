import "./ensure-fetch";
import { CivitaiRESTAPIClient } from "../../src/main";

const main = async () => {
  const client = new CivitaiRESTAPIClient();
  const models = await client.default.getModels({
    nsfw: false,
    limit: 5,
  });
  console.log(models);
};

main().catch(console.error);
