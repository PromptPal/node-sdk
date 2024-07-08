import { HttpResponse, http } from "msw";
import { APIRunPromptResponse } from "../src/types";

const encoder = new TextEncoder();

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  http.post("http://127.0.0.1:7788/api/v1/public/prompts/run/PROMPT_ID", () => {
    return HttpResponse.json(
      {
        id: "PROMPT_ID",
        message: "good job! PromptPal JS SDK",
        tokenCount: 888,
      },
      { status: 200 },
    );
  }),
  http.post(
    "http://127.0.0.1:7788/api/v1/public/prompts/run/PROMPT_ID/stream",
    () => {
      const chunks: APIRunPromptResponse[] = [
        {
          id: "0",
          message: "msg1",
          tokenCount: -1,
        },
        {
          id: "1",
          message: "msg2",
          tokenCount: -1,
        },
        {
          id: "2",
          message: "msg3",
          tokenCount: -1,
        },
      ];

      const stream = new ReadableStream({
        start(controller) {
          // Encode the string chunks using "TextEncoder".
          controller.enqueue(encoder.encode(JSON.stringify(chunks[0])));
          controller.enqueue(encoder.encode(JSON.stringify(chunks[1])));
          controller.enqueue(encoder.encode(JSON.stringify(chunks[2])));
          controller.close();
        },
      });

      // Send the mocked response immediately.
      return new HttpResponse(stream, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  ),
];
