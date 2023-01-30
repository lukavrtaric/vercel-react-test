import { useFormExampleData } from '../../rxjs/rxjs-example';

export type Icon = {
    name: string;
    icon: string;
    version: string;
}

export type FormExampleDataType = ReturnType<typeof useFormExampleData>;
