export class OpenAI {
  async ask(question) {

    if (!question) return

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: question,
        max_tokens: 1024,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
  }
}
