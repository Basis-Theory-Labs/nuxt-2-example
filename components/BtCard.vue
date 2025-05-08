<template>
  <div class="p-4 border rounded">
    <div id='bt-card-container' class="mb-4"></div>

    <button
      class="px-4 py-2 bg-blue-600 text-white rounded"
      @click="createToken"
    >
      Tokenize Card
    </button>


    <button
      class="px-4 py-2 bg-blue-600 text-white rounded"
      @click="createSession"
    >
      Create Session
    </button>

    <!-- show token -->
    <div v-if="token" class="mt-4 p-2 bg-green-50 border rounded">
      <strong>Card Token:</strong> {{ token }}
    </div>

        <!-- show session -->
        <div v-if="session" class="mt-4 p-2 bg-green-50 border rounded">
      <strong>Card Token:</strong> {{ session }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtCard',
  data() {
    return {
      cardElement: null,
      token: null,
      session: null
    }
  },
  async mounted() {
    // this.$bt was injected by your basistheory plugin
    this.cardElement = this.$bt.createElement('card', {
      targetId: this.containerId
    })
    // wait for the iframe to load under js.basistheory.com
    await this.cardElement.mount('#bt-card-container')



   await this.createSession()
  },
  methods: {
    async createSession() {
      this.session = await this.$bt.sessions.create()
    },
    async createToken() {
      try {
        const token = await this.$bt.tokens.create({
          type: "card",
          data: this.cardElement
        })
        this.token = token
      } catch (err) {
        console.error('Tokenization error', err)
      }
    }
  }
}
</script>