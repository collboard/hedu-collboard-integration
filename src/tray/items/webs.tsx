import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const SCALE = 30 * 2;
const SPACING = 10;
const RADIUS = SCALE / 2;

const SHIFT = SCALE + SPACING;

export function itemsWebs(): ITrayDynamicItemList {
    return {
        webSquare: {
            content: (
                <g>
                    <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 0} />
                    <circle r={RADIUS} cx={SHIFT * 2} cy={SHIFT * 2} />
                    <circle r={RADIUS} cx={SHIFT * 2} cy={SHIFT * 0} />
                    <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 2} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        },
        webA: {
            content: (
                <g>
                    <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 0} />
                    <circle r={RADIUS} cx={SHIFT * 3} cy={SHIFT * 0} />
                    <circle r={RADIUS} cx={SHIFT * 1.5} cy={SHIFT * 1.2} />
                    <circle r={RADIUS} cx={SHIFT * 1.5} cy={SHIFT * 3} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        },
        webV: {
            content: (
                <g>
                    <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 3} />
                    <circle r={RADIUS} cx={SHIFT * 3} cy={SHIFT * 3} />
                    <circle r={RADIUS} cx={SHIFT * 1.5} cy={SHIFT * 1.8} />
                    <circle r={RADIUS} cx={SHIFT * 1.5} cy={SHIFT * 0} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        },
    };
}

export function toolbarWebs(): ITrayDynamicToolbarGroup {
    return [
        {
            title: (
                <Translate name={`Hedu / webs / webs templates`}>
                    Pavučiny (šablony, je třeba dokreslit šipky)
                </Translate>
            ),
            itemIds: Object.keys(itemsWebs()),
        },
    ];
}
