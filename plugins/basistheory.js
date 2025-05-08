import Vue from "vue";
import { basistheory } from "@basis-theory/web-elements";

export default async ({ $config }, inject) => {
  try {
    // Initialize with your Public API Key
    const bt = await basistheory("key_dev_prod_us_pub_JU4qttr2YJxLJqg64S4Tf5", { _devMode: true });
    inject("bt", bt);
  } catch (e) {
    // handle initialization errors
    // e.g. network failure, invalid API key, etc.
    /* eslint-disable no-console */
    console.error("Basis Theory init error", e);
  }
};
