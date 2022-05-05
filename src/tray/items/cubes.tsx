import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const cube = (
    <g>
        <polygon points="0, 15 15, 0 45, 0 30, 15" style={{ stroke: 'none' }} />
        <polygon points="45, 0 30, 15 30, 45 45, 30" style={{ stroke: 'none' }} />
        <polygon points="0, 15 15, 0 45, 0 30, 15" style={{ fill: 'rgba(255,255,255,0.4)' }} />
        <polygon points="45, 0 30, 15 30, 45 45, 30" style={{ fill: 'rgba(0,0,0,0.4)' }} />
        <polygon points="0, 15 30, 15 30, 45 0, 45" />
    </g>
);

export function itemsCubes(): ITrayDynamicItemList {
    return {
        cubeWhite: {
            content: cube,
            defaultColor: heduDrawingColors.white,
        },
        cubeRed: {
            content: cube,
            defaultColor: heduDrawingColors.red,
        },
        cubeBlue: {
            content: cube,
            defaultColor: heduDrawingColors.blue,
        },
        cubeGreen: {
            content: cube,
            defaultColor: heduDrawingColors.green,
        },
        cubeYellow: {
            content: cube,
            defaultColor: heduDrawingColors.yellow,
        },
        cubeBlack: {
            content: cube,
            defaultColor: heduDrawingColors.black,
        },
    };
}

export function toolbarCubes(): ITrayDynamicToolbarGroup {
    return [{ title: <Translate name={`Hedu / cubes`}>Krychle</Translate>, itemIds: Object.keys(itemsCubes()) }];
}
