import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField, Form, FormItem, FormControl } from './ui/form';

interface FormData {
  Id: number;
  Description: string;
}

const MemoForm: FC = () => {
  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');

  const form = useForm<FormData>({
    defaultValues: {
      Id: 0,
      Description: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async () => {
    setId(Math.floor(Math.random() * 1000));
    // setDescription(formData.Description);
    const memo: FormData = {
      Id: id,
      Description: description,
    };

    const response = await fetch('api/memos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memo),
    });

    console.log(response);

    setId(0);
    setDescription('');
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
