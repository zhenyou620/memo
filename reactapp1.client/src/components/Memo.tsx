import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';

// type Props = { enteredText: string };

const EnteringMemo: FC<Props> = () => {
    const [text, setText] = useState('');
    const InputMemo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
        }
    };

    return (
        <Input
            type='text'
            value={text}
            placeholder='メモを入力...'
            onChange={(e) => setText(e.target.value)}
            onKeyDown={InputMemo}
        ></Input>
    );

    const InsertMemo = async () => {
        
    };
};

export default EnteringMemo;
