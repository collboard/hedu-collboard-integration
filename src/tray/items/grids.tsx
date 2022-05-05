import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { heduOutline } from '../heduFilters';

function generateSquares(
    minWidth: number,
    maxWidth: number,
    minHeight: number,
    maxHeight: number,
): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    for (let width = minWidth; width <= maxWidth; width++) {
        for (let height = minHeight; height <= maxHeight; height++) {
            result['grid' + (width + 'x' + height).toString()] = {
                content: (
                    <g>
                        <rect width="30" height="30" x="0" y="0"></rect>
                        {(() => {
                            // TODO: @roseckyj Function declared in a loop contains unsafe references to variable(s) 'JSX'
                            const result2: JSX.Element[] = [];
                            for (let y = 0; y < height; y++) {
                                for (let x = 0; x < width; x++) {
                                    result2.push(
                                        <rect key={x + 'x' + y} width="30" height="30" x={x * 30} y={y * 30}></rect>,
                                    );
                                }
                            }
                            return result2;
                        })()}
                    </g>
                ),
                defaultColor: heduDrawingColors.white,
                filters: [heduOutline],
            };
        }
    }

    return result;
}

const MIN = 3;
const MAX = 6;

export function itemsGrids(): ITrayDynamicItemList {
    return generateSquares(3, 6, 3, 6);
}

export function toolbarGrids(): ITrayDynamicToolbarGroup {
    const result: ITrayDynamicToolbarGroup = [];

    for (let w = MIN; w <= MAX; w++) {
        const row: string[] = [];

        for (let h = MIN; h <= MAX; h++) {
            row.push('grid' + (w + 'x' + h).toString());
        }

        result.push({
            title: (
                <>
                    <Translate name={`Hedu / grids / grids of width`}>Mřížky šířky</Translate> {w}
                </>
            ),
            itemIds: row,
        });
    }

    return result;
}
