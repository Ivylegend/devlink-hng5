import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import Image from "next/image";

// Define your schema
const formSchema = authFormSchema("sign-up");

interface CustomInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder: string;
  icon: string;
}

const CustomInput = <TFieldValues extends FieldValues>({
  control,
  icon,
  name,
  label,
  placeholder,
}: CustomInputProps<TFieldValues>) => {
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
                  type={name.includes("password") ? "password" : "text"}
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
