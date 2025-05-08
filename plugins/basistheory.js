import Vue from "vue";
import { basistheory } from "@basis-theory/web-elements";

export default async ({ $config }, inject) => {
  try {
    // Initialize with your Public API Key
    const bt = await basistheory("<API KEY>");
    inject("bt", bt);
  } catch (e) {
    // handle initialization errors
    // e.g. network failure, invalid API key, etc.
    /* eslint-disable no-console */
    console.error("Basis Theory init error", e);
  }
};
