export const models = [
  {
    title: 'Chat GPT-4o',
    id: 'gpt-4o',
    isLocal: false,
    desc: 'LoremIpsum this is a short summary of this LLM',
  },
  {
    title: 'Claude 3.5 Sonnet',
    id: 'claude-sonnet',
    isLocal: false,
    desc: 'LoremIpsum this is a short summary of this LLM',
  },
  {
    title: 'Lllama 3.2',
    id: 'llama3.2',
    isLocal: true,
    desc: 'LoremIpsum this is a short summary of this LLM',
  },
  {
    title: 'Gemini 5.2',
    id: 'gemini5.2',
    isLocal: false,
    desc: 'LoremIpsum this is a short summary of this LLM',
  },
]

export const input_types = { text: 'Text', file: { image: 'Image', pdf: 'PDF' } }

export const shards = [
  {
    title: 'EEE Expert',
    id: 1,
    context: {
      role: 'EEE Expert for a first year student',
      input_type: input_types.text,
    },
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    model: models[0].title,
  },
  {
    title: 'Mac Expert',
    id: 2,
    context: {
      role: 'Mac Expert for T2 based security chips',
      input_type: input_types.text,
    },
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    model: models[1].title,
  },
  {
    title: 'PDF Summarizer',
    id: 3,
    context: {
      role: 'Summarize the PDFs to a simpler form with key points for each topic',
      input_type: input_types.file.pdf,
    },
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    model: models[2].title,
  },
  {
    title: 'Idea Generator',
    id: 4,
    context: {
      role: 'Generate Ideas as a list and make it feasible enough for college students that does not involve high costs',
      input_type: input_types.text,
    },
    summary: 'LoremIpsum this is a lot of text but simply a summary of the prompt and the answers',
    model: models[2].title,
  },
]
