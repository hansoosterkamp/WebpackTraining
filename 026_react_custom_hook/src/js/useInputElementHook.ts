import * as React from "react";
import { useState } from "react";

// This iInputProps interface can be "spread" into an HTMLInput element
// <input type="text" {...iInpitProps} />
interface iInputProps {
    value: any
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export class UseInputElement<T>
{
    private _initValue: T;
    private _value: T;
    private _setValue: React.Dispatch<React.SetStateAction<T>>;

    public constructor(initialValue:T)
    {
        this._initValue = initialValue;
        [this._value, this._setValue] = useState(initialValue);
        this._props =
        {
            value: this._value,
            onChange: (e) => { this._setValue(e.target.value as unknown as T); }
        }
    }

    private _props: iInputProps;
    public get props(): iInputProps {
        return this._props;
    }

    public get value(): T
    {
        return this._value;
    }

    public set value(val:T) {
        this._setValue(val)
    }

    public Reset(): void {
        this.value = this._initValue;
    }
}