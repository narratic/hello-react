import { FC } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const Counter: FC<Props>;

export declare function DealHeader({ dealStage, dealName }: DealHeaderProps): JSX_2.Element;

declare interface DealHeaderProps {
    dealStage: string;
    dealName: string;
}

declare type Props = {
    /** Set initial value */
    initialValue?: number;
};

export { }
