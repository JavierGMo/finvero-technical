import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface TextInputProps {
  name: string;
  label: string;
  placherholder: string;
  typeInput?: string;
}

export const TextInput = ({
  name,
  label,
  placherholder,
  typeInput = "text",
}: TextInputProps) => {
  const form = useFormContext();
  return (
    <div className="my-2">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placherholder} type={typeInput} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
