import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

function generateSticks(): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    [0, 30, 60, 75, 90, 120, 150, 135, 45].forEach((angle) => {
        result['stick' + angle] = {
            content: (
                <g>
                    <rect
                        width={5 * 30}
                        height={0.5 * 30}
                        x="0"
                        y="0"
                        style={{ transformOrigin: '50% 50%', transform: 'rotate(' + angle + 'deg)' }}
                    />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        };
    });

    return result;
}

export function itemsSticks(): ITrayDynamicItemList {
    return generateSticks();
}

export function toolbarSticks(): ITrayDynamicToolbarGroup {
    return [
        {
            title: (
                <>
                    <Translate name={`Hedu / sticks`}>Dřívka</Translate> 30°
                </>
            ),
            itemIds: [0, 30, 60, 75, 90, 120, 150].map((angle) => 'stick' + angle),
        },
        {
            title: (
                <>
                    <Translate name={`Hedu / sticks`}>Dřívka</Translate> 45°
                </>
            ),
            itemIds: [0, 45, 90, 135].map((angle) => 'stick' + angle),
        },
    ];
}
