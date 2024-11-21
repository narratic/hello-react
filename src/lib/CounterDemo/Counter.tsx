import type { FC } from "react";
import { useEffect } from "react";
import pkg from "lodash";
const { throttle } = pkg;
// import {throttle} from 'lodash';
import { Button } from "@/components/ui/button";

import classes from "./Counter.module.css";
import useLogic from "./useLogic";

export type Props = {
    /** Set initial value */
    initialValue?: number;
};

export const Counter: FC<Props> = ({ initialValue = 0 }) => {
    const { count, incrementCount } = useLogic(initialValue);

    useEffect(() => {
        const runner = throttle(() => {
            console.log("throttle");
        }, 10);
        runner();
    }, []);
    return (
        <div className={classes.counter}>
            <h2 className={classes.header}>Counter</h2>
            <button className={classes.button} type="button" onClick={incrementCount}>
                Increment by one
            </button>
            <Button variant="outline">Shadcn button</Button>

            <div className="bg-red-500">
                Total value: <strong>{count}</strong>
            </div>
        </div>
    );
};
