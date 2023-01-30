import { PageWrapper } from '../../components';
import { CopyToClipboard } from '../../components/query/copy-to-clipboard/CopyToClipBoard';
import { QueryExample } from '../../components/query/query-example/QueryExample';
import { WithReinitializeExample } from '../../components/query/with-reinitialize-example/WithReinitializeExample';

export default function Query() {
    return (
        <PageWrapper>
            <div className='p-8 h-[80vh]'>
                <div className='w-full'>
                    <CopyToClipboard />
                    <WithReinitializeExample />
                    <QueryExample />
                </div>
            </div>
        </PageWrapper>
    );
}
