import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { mapArray } from './_utils';

const sharpness = -0.5;
const star = [
    { x: 0 * 0.5, y: -1 * 0.5 },
    { x: 0.588 * 0.5 * sharpness, y: 0.809 * 0.5 * sharpness },
    { x: -0.951 * 0.5, y: -0.309 * 0.5 },
    { x: 0.951 * 0.5 * sharpness, y: -0.309 * 0.5 * sharpness },
    { x: -0.588 * 0.5, y: 0.809 * 0.5 },
    { x: 0 * 0.5 * sharpness, y: -1 * 0.5 * sharpness },
    { x: 0.588 * 0.5, y: 0.809 * 0.5 },
    { x: -0.951 * 0.5 * sharpness, y: -0.309 * 0.5 * sharpness },
    { x: 0.951 * 0.5, y: -0.309 * 0.5 },
    { x: -0.588 * 0.5 * sharpness, y: 0.809 * 0.5 * sharpness },
];

const shapes = {
    rect: <rect width="30" height="30" x="0" y="0" />,
    circle: <circle r="15" cx="15" cy="15" />,
    triangle: <polygon points="15, 0 0, 30 30, 30" />,
    star: <polygon points={star.map((val) => val.x * 30 + 15 + ', ' + (val.y * 30 + 15)).join(' ')} />,
    cross: <polygon points="6, 0 15, 9 24, 0 30, 6 21, 15 30, 24 24, 30 15, 21 6, 30 0, 24 9, 15 0, 6" />,
};

export function itemsShapes(): ITrayDynamicItemList {
    return {
        ...mapArray(shapes, heduDrawingColors.red, 'shapesRed'),
        ...mapArray(shapes, heduDrawingColors.green, 'shapesGreen'),
        ...mapArray(shapes, heduDrawingColors.blue, 'shapesBlue'),
        ...mapArray(shapes, heduDrawingColors.yellow, 'shapesYellow'),
    };
}

export function toolbarShapes(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / shapes / red shapes`}>Červené tvary</Translate>,
            itemIds: Object.keys(mapArray(shapes, heduDrawingColors.red, 'shapesRed')),
        },
        {
            title: <Translate name={`Hedu / shapes / green shapes`}>Zelené tvary</Translate>,
            itemIds: Object.keys(mapArray(shapes, heduDrawingColors.green, 'shapesGreen')),
        },
        {
            title: <Translate name={`Hedu / shapes / blue shapes`}>Modré tvary</Translate>,
            itemIds: Object.keys(mapArray(shapes, heduDrawingColors.blue, 'shapesBlue')),
        },
        {
            title: <Translate name={`Hedu / shapes / yellow shapes`}>Žluté tvary</Translate>,
            itemIds: Object.keys(mapArray(shapes, heduDrawingColors.yellow, 'shapesYellow')),
        },
    ];
}
