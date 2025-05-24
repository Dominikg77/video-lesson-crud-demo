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
  category: z.string().min(1, "Kategorie auswählen"),
  selection: z.string().min(1, "Kapitel auswählen"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
  videoUrl: z.string().url("Bitte eine gültige URL eingeben"),
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
      category: "",
      selection: "",
      description: "",
      videoUrl: "",
      isLive: false,
      ...initialValues,
    },
  });

  // Initialwerte bei Dialog-Open setzen (für Edit-Fall)
  useEffect(() => {
    if (initialValues) {
      form.reset({ ...form.getValues(), ...initialValues });
    } else {
      form.reset({
        title: "",
        category: "",
        selection: "",
        description: "",
        videoUrl: "",
        isLive: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  return (
    <Form {...form}>
      <form
        id="add-edit-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 w-full"
        // max-w-3xl px-2 können optional raus
      >
        {/* Titel: auf ganze Breite */}
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

        {/* Kategorie und Kapitel: nebeneinander */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="category"
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
            name="selection"
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

        {/* Beschreibung: auf ganze Breite */}
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

        {/* VideoUrl und Live: nebeneinander */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
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
