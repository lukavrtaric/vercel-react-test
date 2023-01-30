import { render, screen } from '@testing-library/react';
import { Button } from 'components';
import { DATA_IDS } from 'constants/data-ids';

const onClick = jest.fn();

describe('Button', () => {
    let container: HTMLElement;
    let element: HTMLElement;
    describe('enabled behavior', () => {
        beforeEach(() => {
            const result = render(
                <Button
                    className='button-test'
                    type='reset'
                    mode='danger'
                    onClick={onClick}
                >
                    Test
                </Button>,
            );
            container = result.container;
            element = screen.getByTestId(DATA_IDS.BUTTON);
        });
        it('should mount in the DOM tree', () => {
            expect(container).toBeInTheDocument();
        });
        it('should render the correct text', () => {
            expect(container).toHaveTextContent('Test');
        });
        it('should have the correct type', () => {
            expect(element).toHaveAttribute('type', 'reset');
        });
        it('should have the correct mode', () => {
            const elementLenght =
                container.getElementsByClassName('button-danger').length;
            expect(elementLenght).toBe(1);
        });
        it('should apply external className', () => {
            const elementLenght =
                container.getElementsByClassName('button-test').length;
            expect(elementLenght).toBe(1);
        });
        it('should execute the onClick function when clicked', () => {
            element.click();
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
    describe('disabled behavior', () => {
        beforeEach(() => {
            const result = render(
                <Button type='reset' mode='danger' disabled onClick={onClick}>
                    Test
                </Button>,
            );
            container = result.container;
            element = screen.getByTestId(DATA_IDS.BUTTON);
        });
        it('should be disabled', () => {
            expect(element).toBeDisabled();
        });
        it('should not execute the onClick function when clicked', () => {
            element.click();
            expect(onClick).toHaveBeenCalledTimes(0);
        });
    });
});
