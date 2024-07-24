"use client";

import { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const formSchema = z.object({
  links: z.array(
    z.object({
      platform: z.string().min(2, { message: "This field cannot be empty" }),
      link: z.string().min(2, { message: "This field cannot be empty" }),
    })
  ),
});

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser();
      if (!loggedInUser) {
        router.push("/sign-in");
      } else {
        setUser(loggedInUser);
      }
    };

    fetchUser();
  }, [router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      links: [],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="bg-lightgray min-h-screen md:p-6 flex flex-col md:gap-6">
      <div>
        <Navbar />
        <MobileNav />
      </div>
      <div className="xl:flex gap-6 w-full">
        {/* DESKTOP ONLY */}
        <div className="hidden xl:flex xl:min-h-[744px] xl:max-h-[750px] w-[560px] bg-white rounded-[12px] items-center justify-center">
          {/* PHONE DIAGRAM */}
          <Phone user={user} />
        </div>

        {/* DESKTOP AND MOBILE */}
        <div className="p-4 md:p-0 w-full xl:w-2/3">
          <div className="bg-white w-full py-6 md:py-10 rounded-[12px] flex flex-col gap-10">
            <div className="flex flex-col gap-2 px-6 md:px-10">
              <h2 className="text-darkgray font-bold text-2xl md:text-[32px]">
                Customize your links
              </h2>
              <p className="text-gray font-normal">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </div>

            <div className="w-full flex flex-col gap-6 px-6 md:px-10">
              <Button
                variant={"outline"}
                className="text-purple w-full rounded-lg bg-white border hover:bg-lightpurple hover:text-purple font-semibold border-purple py-[11px] px-[27px] h-12"
                onClick={() => append({ platform: "", link: "" })}
              >
                + Add new Link
              </Button>

              {/* GET STARTED */}
              {fields.length === 0 && (
                <div className="bg-lightgray w-full rounded-[12px] min-h-[376px] p-5 flex flex-col items-center justify-center gap-6">
                  <Image
                    src="/icons/get-started.svg"
                    alt="icon"
                    width={248}
                    height={160}
                  />
                  <h2 className="text-darkgray font-bold text-2xl md:text-[32px] text-center">
                    Let&apos;s get you started
                  </h2>
                  <p className="text-center text-gray max-w-[488px]">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them.
                    We&apos;re here to help you share your profiles with
                    everyone!
                  </p>
                </div>
              )}

              {/* LINK DIVS */}
              {fields.length > 0 && (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 w-full"
                  >
                    {fields.map((item, index) => (
                      <div
                        key={item.id}
                        className="bg-lightgray w-full rounded-lg flex flex-col gap-3 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex gap-2">
                            =
                            <p className="text-gray font-bold">
                              Link #{index + 1}
                            </p>
                          </span>
                          <p
                            className="cursor-pointer text-gray"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </p>
                        </div>

                        {/* SELECT FIELD */}
                        <FormField
                          control={form.control}
                          name={`links.${index}.platform`}
                          render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                              <FormLabel className="text-xs text-gray md:text-base">
                                Platform
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger className="w-full rounded-lg py-3 px-4 h-12">
                                    <SelectValue placeholder="Select a platform" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="github">
                                      GitHub
                                    </SelectItem>
                                    <SelectItem value="linkedin">
                                      LinkedIn
                                    </SelectItem>
                                    <SelectItem value="twitter">
                                      Twitter
                                    </SelectItem>
                                    <SelectItem value="youtube">
                                      YouTube
                                    </SelectItem>
                                    <SelectItem value="facebook">
                                      Facebook
                                    </SelectItem>
                                    <SelectItem value="instagram">
                                      Instagram
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* LINK INPUT FIELD */}
                        <FormField
                          control={form.control}
                          name={`links.${index}.link`}
                          render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                              <FormLabel className="text-xs text-gray md:text-base">
                                Link
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. https://www.github.com/johnappleseed"
                                  {...field}
                                  className="w-full rounded-lg py-3 px-4 h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}

                    <div className="border-t p-4 md:px-10 flex justify-center md:justify-end">
                      <Button
                        type="submit"
                        className="text-white w-full md:w-24 rounded-lg bg-purple hover:bg-lightpurple hover:text-purple py-[11px] px-[27px] h-12"
                        disabled={!form.formState.isValid}
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
            {fields.length === 0 && (
              <div className="border-t p-4 md:px-10 flex justify-center md:justify-end">
                <Button
                  className="text-white w-full md:w-24 rounded-lg bg-purple hover:bg-lightpurple hover:text-purple py-[11px] px-[27px] h-12"
                  disabled
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
