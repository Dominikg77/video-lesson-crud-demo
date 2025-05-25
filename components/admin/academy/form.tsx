"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AcademyCategory } from "@/lib/data/academy-type";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(1, "Titel ist erforderlich"),
  categoryId: z.string().min(1, "Kategorie auswählen"),
  sectionId: z.string().min(1, "Kapitel auswählen"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
  videoUrl: z.string().url("Bitte eine gültige URL eingeben"),
  orderId: z.number().min(1, "Reihenfolge muss größer als 0 sein"),
  isLive: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

type AddEditFormProps = {
  initialValues?: Partial<FormValues> | null;
  onSubmit: (values: FormValues) => void;
  disabled?: boolean;
};

export default function AddEditForm({ initialValues, onSubmit, disabled }: AddEditFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      categoryId: "",
      sectionId: "",
      description: "",
      videoUrl: "",
      isLive: false,
      orderId: 0,
      ...initialValues,
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset({ ...form.getValues(), ...initialValues });
    } else {
      form.reset({
        title: "",
        categoryId: "",
        sectionId: "",
        description: "",
        videoUrl: "",
        isLive: false,
        orderId: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  return (
    <Form {...form}>
      <form id="add-edit-form" onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 w-full">
        <div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titel</FormLabel>
                <FormControl>
                  <Input placeholder="Titel" type="text" {...field} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategorie</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Auswahl einer Kategorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={AcademyCategory.Intraday}>Intraday</SelectItem>
                    <SelectItem value={AcademyCategory.Scalping}>Scalping</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sectionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kapitel</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Auswahl eines Kapitels" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basic-wissen">Basic Wissen</SelectItem>
                    <SelectItem value="live-trading">Live Trading</SelectItem>
                    <SelectItem value="scalping-basics">Scalping Basic</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Beschreibung</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Gib eine Beschreibung des Videos oder verlinke etwas"
                    className="resize-none min-h-[120px] md:min-h-[160px]"
                    {...field}
                    disabled={disabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Url</FormLabel>
              <FormControl>
                <Input placeholder="embed Youtube" type="text" {...field} disabled={disabled} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <FormField
            control={form.control}
            name="orderId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reihenfolge</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type="number"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    disabled={disabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isLive"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4 h-full">
                <FormLabel>Live</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} disabled={disabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
