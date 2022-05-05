import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const trains: { [key: number]: string } = {
    1: heduDrawingColors.white,
    2: heduDrawingColors.red,
    3: heduDrawingColors.green,
    4: 'rgb(126, 62, 152)',
    5: heduDrawingColors.yellow,
    6: 'rgb(25, 104, 53)',
    7: 'rgb(204, 204, 204)',
    8: 'rgb(95, 51, 16)',
    9: 'rgb(1, 90, 170)',
    10: 'rgb(247, 147, 29)',
};

function generateTrainsSideLook() {
    const result: ITrayDynamicItemList = {};

    Object.keys(trains).forEach((key) => {
        const num = parseInt(key, 10);
        result['train' + key] = {
            content: (
                <g>
                    <rect width={num * 30} height="30" x="0" y="0"></rect>
                </g>
            ),
            defaultColor: trains[num],
        };
    });

    return result;
}

function generateTrainsFrontLook() {
    const result: ITrayDynamicItemList = {};

    Object.keys(trains).forEach((key) => {
        const num = parseInt(key, 10);
        result['trainFront' + key] = {
            content: (
                <g>
                    <circle r="15" cx="15" cy="15" />
                </g>
            ),
            defaultColor: trains[num],
        };
    });

    return result;
}

const LINE_COORDS = Math.sin(Math.PI / 4) * 15;

export function itemsTrains(): ITrayDynamicItemList {
    return {
        ...generateTrainsSideLook(),
        ...generateTrainsFrontLook(),
        trainFrontUnknown: {
            content: (
                <g>
                    <circle r="15" cx="15" cy="15" />
                    <line x1={15 - LINE_COORDS} x2={15 + LINE_COORDS} y1={15 - LINE_COORDS} y2={15 + LINE_COORDS} />
                    <line x1={15 - LINE_COORDS} x2={15 + LINE_COORDS} y1={15 + LINE_COORDS} y2={15 - LINE_COORDS} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        },
    };
}

export function toolbarTrains(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / trains / trains from the front`}>Vláčky zepředu</Translate>,
            itemIds: [...Object.keys(generateTrainsFrontLook()), 'trainFrontUnknown'],
        },
        {
            title: <Translate name={`Hedu / trains / operators`}>Operátory</Translate>,
            itemIds: ['operatorEqual', 'operatorGreater', 'operatorLower'],
        },
        {
            title: <Translate name={`Hedu / trains / trains from the side`}>Vláčky zboku</Translate>,
            itemIds: Object.keys(generateTrainsSideLook()),
        },
    ];
}
