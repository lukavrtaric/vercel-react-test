import z from 'zod';
import { slug } from 'cuid';
import { BehaviorSubject, Subject, withLatestFrom } from 'rxjs';
import { useObservable } from 'hooks';

const formValuesValidator = z.object({
    name: z.string(),
    gender: z.string(),
    level: z.number().min(0).max(100),
    types: z.number(),
});

export type FormValuesType = z.infer<typeof formValuesValidator>;

type ExportDataType = {
    [key: string]: FormValuesType;
};

export const formExample$ = new BehaviorSubject<ExportDataType>({});

export const formExampleIntent$ = new Subject<{
    data: FormValuesType;
    id?: string;
}>();

formExampleIntent$
    .pipe(withLatestFrom(formExample$))
    .subscribe(([{ data, id }, prevData]) => {
        formExample$.next({ ...prevData, [id ?? slug()]: data });
    });

export const useFormExampleData = () => {
    const data = useObservable(formExample$);

    if (!data) {
        return [];
    }

    return Object.entries(data).map(([id, values]) => ({ key: id, ...values }));
};
