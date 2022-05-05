import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { arrow } from './_utils';

const SCALE = 30 * 2;
const SPACING = 0;
const RADIUS = SCALE / 2;

const SHIFT = SCALE + SPACING;

const ARROW_OFFSET = 5;

function generateSnakes(showArrows: boolean, key: string): ITrayDynamicItemList {
    const mainResult: ITrayDynamicItemList = {};

    [2, 3].forEach((length) => {
        mainResult[key + length] = {
            content: (
                <g>
                    <g style={{ stroke: 'none', strokeWidth: '0' }}>
                        {(() => {
                            const result = [];
                            for (let i = 0; i < length; i++) {
                                result.push(
                                    <circle
                                        key={i /* TODO: Probably better key */}
                                        r={RADIUS}
                                        cx={SHIFT * (i * 2 + 1)}
                                        cy={SHIFT * 0}
                                    />,
                                );
                            }
                            return result;
                        })()}
                    </g>
                    <g style={{ stroke: 'none', strokeWidth: '0', fill: heduDrawingColors.yellow }}>
                        <circle r={RADIUS} cx={SHIFT * 0} cy={SHIFT * 1} />
                        {(() => {
                            const result = [];
                            for (let i = 0; i < length; i++) {
                                result.push(
                                    <circle
                                        key={i /* TODO: Probably better key */}
                                        r={RADIUS}
                                        cx={SHIFT * (i * 2 + 2)}
                                        cy={SHIFT * 1}
                                    />,
                                );
                            }
                            return result;
                        })()}
                    </g>
                    {showArrows && (
                        <g>
                            {(() => {
                                const result = [];
                                for (let i = 0; i < length; i++) {
                                    result.push(
                                        arrow(
                                            SHIFT * (0.5 + i * 2) + ARROW_OFFSET,
                                            SHIFT * 1,
                                            SHIFT * (1.5 + i * 2) - ARROW_OFFSET,
                                            SHIFT * 1,
                                            i,
                                        ),
                                    );
                                }
                                return result;
                            })()}
                        </g>
                    )}
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        };
    });

    return mainResult;
}

export function itemsSnakes(): ITrayDynamicItemList {
    return {
        ...generateSnakes(true, 'snake'),
        ...generateSnakes(false, 'snakeTemplate'),
    };
}

export function toolbarSnakes(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / snakes / snakes`}>Hadi</Translate>,
            itemIds: Object.keys(generateSnakes(true, 'snake')),
        },
        {
            title: (
                <Translate name={`Hedu / snakes / snakes without arrows`}>
                    Hadi (šablony, je třeba dokreslit šipky)
                </Translate>
            ),
            itemIds: Object.keys(generateSnakes(false, 'snakeTemplate')),
        },
    ];
}
