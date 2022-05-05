import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { arrow } from './_utils';

const SCALE = 30 * 2;
const SPACING = 0;
const RADIUS = SCALE / 2;

const SHIFT = SCALE + SPACING;

const ARROW_OFFSET = 5;

export function itemsArrowGraphs(): ITrayDynamicItemList {
    return {
        arrowGraph: {
            content: (
                <g>
                    <g style={{ stroke: 'none', strokeWidth: '0' }}>
                        <circle r={RADIUS} cx={SHIFT * 2} cy={SHIFT * 0} />
                        <circle r={RADIUS} cx={SHIFT * 2} cy={SHIFT * 4} />
                        <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 2} />
                        <circle r={RADIUS} cx={SHIFT * 4} cy={SHIFT * 2} />
                    </g>
                    <g style={{ stroke: 'none', strokeWidth: '0', fill: heduDrawingColors.yellow }}>
                        <circle r={RADIUS} cx={SHIFT * 1} cy={SHIFT * 1} />
                        <circle r={RADIUS} cx={SHIFT * 1} cy={SHIFT * 3} />
                        <circle r={RADIUS} cx={SHIFT * 3} cy={SHIFT * 1} />
                        <circle r={RADIUS} cx={SHIFT * 3} cy={SHIFT * 3} />
                    </g>
                    <g>
                        {arrow(SHIFT * 1.5 + ARROW_OFFSET, SHIFT * 1, SHIFT * 2.5 - ARROW_OFFSET, SHIFT * 1)}
                        {arrow(SHIFT * 1.5 + ARROW_OFFSET, SHIFT * 3, SHIFT * 2.5 - ARROW_OFFSET, SHIFT * 3)}
                        {arrow(SHIFT * 1, SHIFT * 1.5 + ARROW_OFFSET, SHIFT * 1, SHIFT * 2.5 - ARROW_OFFSET)}
                        {arrow(SHIFT * 3, SHIFT * 1.5 + ARROW_OFFSET, SHIFT * 3, SHIFT * 2.5 - ARROW_OFFSET)}
                    </g>
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
    };
}

export function toolbarArrowGraphs(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / arrow graphs`}>Šipkové grafy</Translate>,
            itemIds: Object.keys(itemsArrowGraphs()),
        },
    ];
}
