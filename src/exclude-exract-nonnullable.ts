export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string|number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
//type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type nonFunctionTypeByExtract = Extract<SomeTypes, string|number>;
type FunctionTypeByExtracting = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;