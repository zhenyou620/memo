import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField, Form, FormItem, FormControl } from './ui/form';

interface FormData {
  Id: string;
  Description: string;
}

const url = 'api/memos';

const MemoForm: FC = () => {
  const form = useForm<FormData>({
    defaultValues: {
      Id: '',
      Description: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const id = new Date().toString();
    const memo: FormData = {
      Id: id,
      Description: formData.Description,
    };

    console.log(memo);

    const response = await fetch('api/memos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memo),
    });
    console.log(response);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96">
        <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="メモを入力..."
                  {...field}
                  className="h-20"
                ></Input>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default MemoForm;
