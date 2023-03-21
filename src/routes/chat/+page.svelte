<script lang="ts">
  import { OpenAI } from '$lib/package/openai'

  const openai = new OpenAI();

  let messages = [];
  let inputText = '';

  async function handleSubmit() {
    // ユーザーがテキストを送信したらOpenAIに質問を問い合わせます
    const response = await openai.ask(inputText);

    // OpenAIからのレスポンスを取得して、メッセージとして追加します
    const botMessage = { text: response, from: 'bot' };
    messages = [...messages, { text: inputText, from: 'user' }, botMessage];

    // テキストをクリアします
    inputText = '';
  }
</script>

<div>
  <ul>
    {#each messages as message}
      <li class:message.from>{message.text}</li>
    {/each}
  </ul>
  <input type="text" bind:value={inputText} on:keydown={(event) => { if (event.key === 'Enter') handleSubmit(); }} />
  <button on:click={handleSubmit}>送信</button>
</div>

<style>
    .user {
        color: blue;
    }
    .bot {
        color: red;
    }
</style>
