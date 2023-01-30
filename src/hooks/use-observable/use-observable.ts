import React from 'react';
import { Observable } from 'rxjs';

const useObservable = <T>(observable: Observable<T>) => {
    const [value, setValue] = React.useState<T>();

    React.useEffect(() => {
        const subscription = observable.subscribe(setValue);
        return () => subscription.unsubscribe();
    }, [observable]);

    return value;
};

export default useObservable;
