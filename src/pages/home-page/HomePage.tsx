import { PageWrapper } from 'components';
import { HomeGrid } from '../../components/home/grid/HomeGrid';

export default function Home() {
    return (
        <PageWrapper>
            <div className='p-8 h-[80vh]'>
                <HomeGrid />
            </div>
        </PageWrapper>
    );
}
