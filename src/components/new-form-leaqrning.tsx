import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const signUpFormSchema = z.object({
  username: z
    .string({ message: "User name is required" })
    .min(2, { message: "Minimum two charecters is required" })
    .max(20, { message: "Maximum 20 characters is valid" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Minimum 8 charecters is required" })
    .max(20, { message: "Maximum 20 characters is valid" }),
  role: z.enum(["1", "2"], {
    message: "Please select a role"
  }),
});

// type Inputs = {
//   username: string;
//   email: string;
//   password: string;
// };

type TSignUpSchema = z.infer<typeof signUpFormSchema>;

const NewFormLearning = () => {
  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (data) => {
    form.reset({ username: "", email: "", password: "" });
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel> User Name </FormLabel>
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter user name"
                  />
                </FormControl>
                {/* <FormDescription /> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Email </FormLabel>
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter email"
                  />
                </FormControl>
                {/* <FormDescription /> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Password </FormLabel>
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter password"
                  />
                </FormControl>
                {/* <FormDescription /> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={(v)=>field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Admin</SelectItem>
                    <SelectItem value="2">User</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Signup User</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewFormLearning;
