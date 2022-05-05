import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

function generateDice(): ITrayDynamicItemList {
    const SIZE = 60;
    const PADDING = 15;

    const result: ITrayDynamicItemList = {};

    const sides: { [key: number]: number[] } = {
        1: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        2: [1, 0, 0, 0, 0, 0, 0, 0, 1],
        3: [1, 0, 0, 0, 1, 0, 0, 0, 1],
        4: [1, 0, 1, 0, 0, 0, 1, 0, 1],
        5: [1, 0, 1, 0, 1, 0, 1, 0, 1],
        6: [1, 0, 1, 1, 0, 1, 1, 0, 1],
        7: [1, 0, 1, 1, 1, 1, 1, 0, 1],
        8: [1, 1, 1, 1, 0, 1, 1, 1, 1],
        9: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    };

    for (let value = 1; value <= 9; value++) {
        const result2: JSX.Element[] = [];
        let i = 0;
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (sides[value] && sides[value][i] === 1) {
                    result2.push(
                        <circle
                            r={5}
                            cx={x * ((SIZE - 2 * PADDING) / 2)}
                            cy={y * ((SIZE - 2 * PADDING) / 2)}
                            style={{
                                fill: heduDrawingColors.stroke,
                            }}
                            key={i /* TODO: Probably better key */}
                        />,
                    );
                }
                i++;
            }
        }

        result['dice' + value] = {
            content: (
                <g>
                    <rect width={SIZE} height={SIZE} x={-PADDING} y={-PADDING} />
                    {result2}
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        };
    }

    return result;
}

export function itemsDice(): ITrayDynamicItemList {
    return generateDice();
}

export function toolbarDice(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / dice / dots on dice`}>Tečky na kostce</Translate>,
            itemIds: Object.keys(itemsDice()),
        },
    ];
}
