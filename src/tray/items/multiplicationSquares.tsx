import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const SCALE = 30 * 2;
const SPACING = 30 * 1;

const SHIFT_0 = 0;
const SHIFT_1 = 1 * (SCALE + SPACING);
const SHIFT_2 = 2 * (SCALE + SPACING);

export function itemsMultiplicationSquares(): ITrayDynamicItemList {
    return {
        multiplicationSquare: {
            content: (
                <g>
                    <rect width={SHIFT_2} height={SHIFT_2} x={SCALE / 2} y={SCALE / 2} style={{ fill: 'none' }}></rect>
                    <g style={{ stroke: 'none', strokeWidth: '0' }}>
                        <rect width={SCALE} height={SCALE} x={SHIFT_0} y={SHIFT_0}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_2} y={SHIFT_0}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_2} y={SHIFT_2}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_0} y={SHIFT_2}></rect>
                    </g>
                    <g style={{ stroke: 'none', strokeWidth: '0', fill: heduDrawingColors.yellow }}>
                        <rect width={SCALE} height={SCALE} x={SHIFT_0} y={SHIFT_1}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_2} y={SHIFT_1}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_1} y={SHIFT_0}></rect>
                        <rect width={SCALE} height={SCALE} x={SHIFT_1} y={SHIFT_2}></rect>
                    </g>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
    };
}

export function toolbarMultiplicationSquares(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / multiplication squares`}>Násobilkové čtverce</Translate>,
            itemIds: Object.keys(itemsMultiplicationSquares()),
        },
    ];
}
