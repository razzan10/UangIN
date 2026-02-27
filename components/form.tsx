"use client"

import { formSchema } from "@/zod/formSchema"
import { useForm,Controller } from "react-hook-form"
import * as z from "zod"
import * as React from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {toast} from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {

} from "@/components/ui/input-group"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

const ReportForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      amount: 0,
    }
  })

  const onSubmit = (data: z.infer<typeof formSchema>) =>{
    toast("You submitted the following values: ", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius) + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Add new note</CardTitle>
        <CardDescription>Add some new dailies finasial note.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="type"
              control={form.control}
              render={({field, fieldState}) => (
                <Field data-invalid={fieldState.invalid} >
                  <FieldLabel htmlFor="form-rhf-demo-type">
                    Type
                  </FieldLabel>
                  <Input
                  {...field}
                  id="form-rhf-demo-type"
                  aria-invalid={fieldState.invalid}
                  placeholder="Pemasukan/Pengeluaran/Hutang"
                  autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]}/>
                  )}
                </Field>
              )}
            />
            <Controller
              name="amount"
              control={form.control}
              render={({field, fieldState}) => (
                <Field data-invalid={fieldState.invalid} >
                  <FieldLabel htmlFor="form-rhf-demo-amount">
                    Amount
                  </FieldLabel>
                  <Input
                  {...field}
                  id="form-rhf-demo-amount"
                  aria-invalid={fieldState.invalid}
                  placeholder="Amount"
                  autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]}/>
                  )}
                </Field>
              )}
            />
            <Controller
              name="descriptions"
              control={form.control}
              render={({field, fieldState}) => (
                <Field data-invalid={fieldState.invalid} >
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <Input
                  {...field}
                  id="form-rhf-demo-description"
                  aria-invalid={fieldState.invalid}
                  placeholder="Description..."
                  autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]}/>
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

export default ReportForm
