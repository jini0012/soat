import algoliasearch, { SearchClient } from "algoliasearch";

const APP_ID: string | undefined = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY: string | undefined = process.env.ALGOLIA_ADMIN_KEY;

if (!APP_ID || !ADMIN_KEY) {
  throw new Error("Algolia APP ID or ADMIN KEY is missing.");
}

const adminClient: SearchClient = algoliasearch(APP_ID, ADMIN_KEY);

export const postsIndex = adminClient.initIndex("performancesIndex");
