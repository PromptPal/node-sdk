import { test, expect } from 'vitest'
import PromptPalClient from './main'

test('client should execute correctly', async () => {
  const c = new PromptPalClient('http://127.0.0.1:8964', 'token')
  const res = await c.execute('PROMPT_ID', { text: 'hello world' }, '123')

  expect(res.id).toBe('PROMPT_ID')
  expect(res.message).toBe('good job! PromptPal JS SDK')
  expect(res.tokenCount).toBe(888)
})