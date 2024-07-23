import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import Image from "next/image";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  icon: string;
}

const CustomInput = ({
  control,
  icon,
  name,
  label,
  placeholder,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          <FormLabel className="text-xs text-darkgray">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <div className="flex items-center border border-border rounded-[8px] gap-3 py-3 px-4 h-12">
              <Image src={icon} width={20} height={20} alt="icon" />
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="border-none p-0 bg-transparent outline-none focus-visible:ring-transparent"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
