import { test, expect, vi } from "vitest";
import PromptPalClient from "./main";

test("client should execute correctly", async () => {
  const c = new PromptPalClient("http://127.0.0.1:7788", "token");
  const res = await c.execute("PROMPT_ID", { text: "hello world" }, "123");

  expect(res.id).toBe("PROMPT_ID");
  expect(res.message).toBe("good job! PromptPal JS SDK");
  expect(res.tokenCount).toBe(888);
});

test("client should call streaming execute correctly", async () => {
  const c = new PromptPalClient("http://127.0.0.1:7788", "token");
  const onData = vi.fn();
  const onEnd = vi.fn();
  const res = await c.executeStream(
    "PROMPT_ID",
    { text: "hello world" },
    "123",
    {
      onData,
      onEnd,
    },
  );

  expect(res).toBeTruthy();

  expect(res?.id).toBe("2");
  expect(res?.message).toBe("msg1msg2msg3");
  expect(res?.tokenCount).toBe(-1);
  expect(onData).toBeCalledTimes(3);
  expect(onEnd).toBeCalledTimes(1);
});
