declare const mapObject: <KeyedObj, I, O>(obj: { [K in keyof KeyedObj]: I; }, fn: (val: I, key: keyof KeyedObj) => O) => { [K_1 in keyof KeyedObj]: O; };
export default mapObject;
//# sourceMappingURL=mapObject.d.ts.map