import React from "react";
import useStore from '../store/store';
import { selectIncrease, selectClear } from '../store/selectors';

function Buttons() {
    const increase = useStore(selectIncrease);
    const clear = useStore(selectClear);

    return (
        <React.Fragment>
            <button onClick={() => increase()}>Increase</button>
            <button onClick={() => clear()}>Reset</button>
        </React.Fragment>
    );
}

export default Buttons;