import { useState } from 'react';
import { copyToClipboard } from '../../../utils/copy-to-clipboard';
import { Title } from '../../index';

export const CopyToClipboard = () => {
    const [text, setText] = useState(
        'Testing copy to clipboard: ' + Math.random(),
    );
    return (
        <>
            <Title type='primary'>Copy to clipboard example</Title>
            <div className='py-4 2xl:py-8  w-full flex gap-4 items-center text-[#17355D]'>
                <span className='flow 2xl:text-lg'>{text}</span>
                <button
                    onClick={() => {
                        copyToClipboard(text);
                    }}
                >
                    Copy
                </button>
                <textarea className='text-[#17355D] border rounded border-[#17355D]' />
                <button
                    onClick={() => {
                        setText('Testing copy to clipboard: ' + Math.random());
                    }}
                >
                    Refresh
                </button>
            </div>
        </>
    );
};
