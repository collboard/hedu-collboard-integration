import React from 'react';
import { ITrayDynamicItemList } from '@collboard/modules-sdk';
const ARROW_HEAD_LENGTH = 15;
const ARROW_HEAD_WIDTH = 10;

export function arrow(x1: number, y1: number, x2: number, y2: number, key?: number | string) {
    if (y1 === y2) {
        // horizontal
        return (
            <g style={{ strokeLinecap: 'round' }} key={key}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} />
                <line x1={x2} y1={y2} x2={x2 - ARROW_HEAD_LENGTH} y2={y2 - ARROW_HEAD_WIDTH} />
                <line x1={x2} y1={y2} x2={x2 - ARROW_HEAD_LENGTH} y2={y2 + ARROW_HEAD_WIDTH} />
            </g>
        );
    }

    if (x1 === x2) {
        // vertical
        return (
            <g style={{ strokeLinecap: 'round' }} key={key}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} />
                <line x1={x2} y1={y2} x2={x2 - ARROW_HEAD_WIDTH} y2={y2 - ARROW_HEAD_LENGTH} />
                <line x1={x2} y1={y2} x2={x2 + ARROW_HEAD_WIDTH} y2={y2 - ARROW_HEAD_LENGTH} />
            </g>
        );
    }

    return <></>;
}

export function mapArray(
    object: { [key: string]: JSX.Element },
    color: string,
    prefix: string = '',
    contentWrapper: (value: JSX.Element) => JSX.Element = (value) => value,
) {
    const result: ITrayDynamicItemList = {};

    Object.keys(object).forEach((key) => {
        result[prefix + key.charAt(0).toUpperCase() + key.slice(1)] = {
            content: contentWrapper(object[key]),
            defaultColor: color,
        };
    });

    return result;
}

export function hideBorderContentWrapper(value: JSX.Element) {
    return <g style={{ stroke: 'none', strokeWidth: '0' }}>{value}</g>;
}
