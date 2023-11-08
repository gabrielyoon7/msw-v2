// src/mocks/handlers.ts
import {http, HttpResponse} from 'msw'

export const handlers = [
  http.get('/posts', () => {
    console.log('msw:get :: /posts')
    return HttpResponse.json({
      data: "Captured a \"GET /posts\" request",
    })
  }),
]
