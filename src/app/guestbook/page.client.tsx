"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { insertGuestBookEntriesSchema } from "@/db/schema/guestbook-entries";

import { createGuestBookEntry } from "./action";

const GuestBookClient = () => {
  const [lastResult, action] = useFormState(createGuestBookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: insertGuestBookEntriesSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      className="flex flex-col gap-2"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
    >
      <Textarea
        label="Message"
        placeholder="Enter your message"
        className="w-full"
        key={fields.message.key}
        name={fields.message.name}
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
      />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default GuestBookClient;
