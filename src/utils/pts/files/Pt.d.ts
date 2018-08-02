export interface IPt {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}
export declare var PtBaseArray: Float32ArrayConstructor;
export declare type GroupLike = Group | Pt[];
export declare type PtLike = Pt | Float32Array | number[];
export declare class Pt extends PtBaseArray implements IPt, Iterable<number> {
    protected _id: string;
    constructor(...args: any[]);
    static make(dimensions: number, defaultValue?: number, randomize?: boolean): Pt;
    id: string;
    x: number;
    y: number;
    z: number;
    w: number;
    clone(): Pt;
    equals(p: PtLike, threshold?: number): boolean;
    to(...args: any[]): this;
    $to(...args: any[]): Pt;
    toAngle(radian: number, magnitude?: number, anchorFromPt?: boolean): this;
    op(fn: (p1: PtLike, ...rest: any[]) => any): (...rest: any[]) => any;
    ops(fns: ((p1: PtLike, ...rest: any[]) => any)[]): ((...rest: any[]) => any)[];
    $take(axis: string | number[]): Pt;
    $concat(...args: any[]): Pt;
    add(...args: any[]): this;
    $add(...args: any[]): Pt;
    subtract(...args: any[]): this;
    $subtract(...args: any[]): Pt;
    multiply(...args: any[]): this;
    $multiply(...args: any[]): Pt;
    divide(...args: any[]): this;
    $divide(...args: any[]): Pt;
    magnitudeSq(): number;
    magnitude(): number;
    unit(magnitude?: number): Pt;
    $unit(magnitude?: number): Pt;
    dot(...args: any[]): number;
    cross2D(...args: any[]): number;
    $cross(...args: any[]): Pt;
    $project(...args: any[]): Pt;
    projectScalar(...args: any[]): number;
    abs(): Pt;
    $abs(): Pt;
    floor(): Pt;
    $floor(): Pt;
    ceil(): Pt;
    $ceil(): Pt;
    round(): Pt;
    $round(): Pt;
    minValue(): {
        value: number;
        index: number;
    };
    maxValue(): {
        value: number;
        index: number;
    };
    $min(...args: any[]): Pt;
    $max(...args: any[]): Pt;
    angle(axis?: string | number[]): number;
    angleBetween(p: Pt, axis?: string | number[]): number;
    scale(scale: number | number[] | PtLike, anchor?: PtLike): this;
    rotate2D(angle: number, anchor?: PtLike, axis?: string): this;
    shear2D(scale: number | number[] | PtLike, anchor?: PtLike, axis?: string): this;
    reflect2D(line: GroupLike, axis?: string): this;
    toString(): string;
    toArray(): number[];
}
export declare class Group extends Array<Pt> {
    protected _id: string;
    constructor(...args: Pt[]);
    id: string;
    readonly p1: Pt;
    readonly p2: Pt;
    readonly p3: Pt;
    readonly p4: Pt;
    readonly q1: Pt;
    readonly q2: Pt;
    readonly q3: Pt;
    readonly q4: Pt;
    clone(): Group;
    static fromArray(list: PtLike[]): Group;
    static fromPtArray(list: GroupLike): Group;
    split(chunkSize: number, stride?: number, loopBack?: boolean): Group[];
    insert(pts: GroupLike, index?: number): this;
    remove(index?: number, count?: number): Group;
    segments(pts_per_segment?: number, stride?: number, loopBack?: boolean): Group[];
    lines(): Group[];
    centroid(): Pt;
    boundingBox(): Group;
    anchorTo(ptOrIndex?: PtLike | number): void;
    anchorFrom(ptOrIndex?: PtLike | number): void;
    op(fn: (g1: GroupLike, ...rest: any[]) => any): (...rest: any[]) => any;
    ops(fns: ((g1: GroupLike, ...rest: any[]) => any)[]): ((...rest: any[]) => any)[];
    interpolate(t: number): Pt;
    moveBy(...args: any[]): this;
    moveTo(...args: any[]): this;
    scale(scale: number | number[] | PtLike, anchor?: PtLike): this;
    rotate2D(angle: number, anchor?: PtLike, axis?: string): this;
    shear2D(scale: number | number[] | PtLike, anchor?: PtLike, axis?: string): this;
    reflect2D(line: GroupLike, axis?: string): this;
    sortByDimension(dim: number, desc?: boolean): this;
    forEachPt(ptFn: string, ...args: any[]): this;
    add(...args: any[]): this;
    subtract(...args: any[]): this;
    multiply(...args: any[]): this;
    divide(...args: any[]): this;
    $matrixAdd(g: GroupLike | number[][] | number): Group;
    $matrixMultiply(g: GroupLike | number, transposed?: boolean, elementwise?: boolean): Group;
    zipSlice(index: number, defaultValue?: number | boolean): Pt;
    $zip(defaultValue?: number | boolean, useLongest?: boolean): Group;
    toString(): string;
}
