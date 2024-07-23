"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  email: z.string().email(),
});

interface ProfileFormProps {
  onSubmit: SubmitHandler<z.infer<typeof formSchema>>;
  formRef: React.RefObject<HTMLFormElement>;
  setFormValid: (isValid: boolean) => void;
}

export function ProfileForm({
  onSubmit,
  formRef,
  setFormValid,
}: ProfileFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  useEffect(() => {
    setFormValid(isValid);
  }, [isValid, setFormValid]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 w-full"
        ref={formRef}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
              <FormLabel className="text-xs text-gray md:text-base">First Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  className="w-full rounded-lg py-3 px-4 h-12 md:w-[344px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
              <FormLabel className="text-xs text-gray md:text-base">Last Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Wright"
                  {...field}
                  className="w-full rounded-lg py-3 px-4 h-12 md:w-[344px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
              <FormLabel className="text-xs text-gray md:text-base">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="ben@example.com"
                  {...field}
                  className="w-full rounded-lg py-3 px-4 h-12 md:w-[344px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
