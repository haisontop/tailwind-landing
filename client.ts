import client from "@sanity/client";

export default client({
  projectId: "p8dnbg6n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-12-09",
});
