import { HttpResponse, http } from 'msw'

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  http.post('http://127.0.0.1:7788/api/v1/public/prompts/run/PROMPT_ID', () => {
    return HttpResponse.json({
      id: 'PROMPT_ID',
      message: 'good job! PromptPal JS SDK',
      tokenCount: 888,
    }, { status: 200 })
  }),
]