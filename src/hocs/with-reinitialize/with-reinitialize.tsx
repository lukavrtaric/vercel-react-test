import React from 'react';

interface WithReintializeProps<T> {
    initialValues?: T;
}

const withReinitialize = <TProps, TInjectedProps>(
    WrappedComponent: React.ComponentType<
        TProps & WithReintializeProps<TInjectedProps>
    >,
) => {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';

    const ComponentWithReinitialize: React.FC<
        TProps & WithReintializeProps<TInjectedProps>
    > = (props) => {
        const [shouldReinitialize, setShouldReinitialize] =
            React.useState(false);

        React.useEffect(() => {
            if (shouldReinitialize) {
                setShouldReinitialize(false);
            }
        }, [shouldReinitialize, props.initialValues]);

        React.useEffect(() => {
            setShouldReinitialize(true);
        }, [props.initialValues]);

        if (shouldReinitialize) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    ComponentWithReinitialize.displayName = `withReinitialize(${displayName})`;

    return ComponentWithReinitialize;
};

export default withReinitialize;
