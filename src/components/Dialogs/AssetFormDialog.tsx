import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

import { FeatureTypes, featuresOptions } from "@/config/app.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormDataInputType, formSchema } from "./validation";

interface AssetFormProps {
  defaultValues?: FormDataInputType | undefined;
  notifySubmit: (data: FormDataInputType) => void;
  show: boolean;
  handleSetOpen: (show: boolean) => void;
  title: string;
  description: string;
}

const AssetFormDialog = ({
  defaultValues = undefined,
  notifySubmit,
  show,
  handleSetOpen,
  title,
  description,
}: AssetFormProps) => {
  const form = useForm<FormDataInputType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (!defaultValues) return;
    form.setValue("city", defaultValues?.city);
    form.setValue("address", defaultValues?.address);
    form.setValue("rooms", defaultValues?.rooms);
    form.setValue("price", defaultValues?.price);
    form.setValue("features", defaultValues?.features);
  }, [defaultValues]);

  // 2. Define a submit handler.
  async function onSubmit(values: FormDataInputType) {
    if (defaultValues?.id) {
      values.id = defaultValues.id;
    }

    await notifySubmit(values);
    form.reset();
    handleSetOpen(false);
  }

  return (
    <Dialog open={show} onOpenChange={handleSetOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Please fill address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Please fill city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please fill price"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rooms</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please fill room number"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="features"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Features</FormLabel>
                  <FormControl>
                    <Select
                      value={featuresOptions.filter((c) =>
                        value?.includes(c.value as FeatureTypes)
                      )}
                      onChange={(val) => onChange(val.map((c) => c.value))}
                      isMulti
                      options={featuresOptions}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AssetFormDialog;
