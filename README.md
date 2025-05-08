# Basis Theory Web Elements - Nuxt 2 Example

This is a sample application demonstrating how to integrate Basis Theory Web Elements into a Nuxt 2 application. The implementation shows how to securely collect and tokenize sensitive card data using Basis Theory's web elements.

## Implementation Details

### 1. Plugin Setup (`plugins/basistheory.js`)

The Basis Theory integration is implemented as a Nuxt plugin to ensure proper initialization and global availability:

```javascript
import Vue from "vue";
import { basistheory } from "@basis-theory/web-elements";

export default async ({ $config }, inject) => {
  try {
    const bt = await basistheory("YOUR_PUBLIC_API_KEY");
    inject("bt", bt);
  } catch (e) {
    console.error("Basis Theory init error", e);
  }
};
```

### 2. Client-Side Only (`nuxt.config.js`)

The plugin must run client-side only. This is critical because:

**Basis Theory Web Elements Requirements:**

- Handle sensitive card data directly in the browser
- Create secure iframes loaded from `js.basistheory.com`
- Require browser-specific APIs and DOM access
- Need to handle user input and manage secure communication channels

```javascript
export default {
  plugins: [{ src: "~/plugins/basistheory.js", mode: "client" }],
  build: {
    transpile: ["@basis-theory/web-elements"],
  },
  publicRuntimeConfig: {
    basisPublicApiKey: process.env.BASIS_PUBLIC_API_KEY,
  },
};
```

### 3. Component Implementation (`components/BtCard.vue`)

Example implementation showing secure card data collection:

```javascript
// In your component
async mounted() {
  this.cardElement = this.$bt.createElement('card', {
    targetId: 'your-container-id'
  });
  await this.cardElement.mount('#your-container-element');
}

async createToken() {
  try {
    const token = await this.$bt.tokens.create({
      type: "card",
      data: this.cardElement
    });
    // Handle the token
  } catch (err) {
    console.error('Tokenization error', err);
  }
}
```

## Security Considerations

1. **Client-Side Processing**

   - Card data is collected and tokenized in the browser
   - Sensitive data never touches your server
   - Reduces PCI compliance scope

2. **Secure Communication**

   - All communication happens through secure iframes
   - Data is encrypted in transit
   - API keys are kept in environment variables

3. **Error Handling**
   - All sensitive operations are wrapped in try/catch
   - Errors are logged for debugging
   - Failed operations don't expose sensitive data

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables:
   Create a `.env` file with your Basis Theory public API key:

```
BASIS_PUBLIC_API_KEY=your_public_api_key_here
```

3. Run the development server:

```bash
npm run dev
```

## Usage

### Creating a Card Element

```javascript
// In your component
async mounted() {
  this.cardElement = this.$bt.createElement('card', {
    targetId: 'your-container-id'
  });
  await this.cardElement.mount('#your-container-element');
}
```

### Tokenizing Card Data

```javascript
async createToken() {
  try {
    const token = await this.$bt.tokens.create({
      type: "card",
      data: this.cardElement
    });
    // Handle the token
  } catch (err) {
    console.error('Tokenization error', err);
  }
}
```

### Creating Sessions

```javascript
async createSession() {
  const session = await this.$bt.sessions.create();
  // Handle the session
}
```

## Additional Resources

- [Basis Theory Documentation](https://docs.basistheory.com)
- [Web Elements Documentation](https://docs.basistheory.com/web-elements)
- [Nuxt.js Documentation](https://nuxtjs.org/docs)
