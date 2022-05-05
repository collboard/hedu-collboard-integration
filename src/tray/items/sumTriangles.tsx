import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { heduOutline } from '../heduFilters';

const CELL_SIZE = 2;

function generateSumTriangles(minWidth: number, maxWidth: number): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    for (let w = minWidth; w <= maxWidth; w++) {
        result['sumTriangle' + w] = {
            content: (
                <g>
                    <rect width="30" height="30" x="0" y="0"></rect>
                    {(() => {
                        // TODO: @roseckyj Function declared in a loop contains unsafe references to variable(s) 'JSX'
                        const result2: JSX.Element[] = [];
                        for (let y = 0; y < w; y++) {
                            for (let x = 0; x < w - y; x++) {
                                result2.push(
                                    <rect
                                        width={30 * CELL_SIZE}
                                        height={30 * CELL_SIZE}
                                        x={x * 30 * CELL_SIZE + y * 15 * CELL_SIZE}
                                        y={y * 30 * CELL_SIZE}
                                        key={x + 'x' + y}
                                    ></rect>,
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

    return result;
}

export function itemsSumTriangles(): ITrayDynamicItemList {
    return {
        ...generateSumTriangles(2, 5),
        sumTriangle3x2: {
            content: (
                <g>
                    <rect width={30 * CELL_SIZE} height={30 * CELL_SIZE} x={0} y={0} />
                    <rect width={30 * CELL_SIZE} height={30 * CELL_SIZE} x={30 * CELL_SIZE} y={0} />
                    <rect width={30 * CELL_SIZE} height={30 * CELL_SIZE} x={60 * CELL_SIZE} y={0} />
                    <rect width={30 * CELL_SIZE} height={30 * CELL_SIZE} x={15 * CELL_SIZE} y={30 * CELL_SIZE} />
                    <rect width={30 * CELL_SIZE} height={30 * CELL_SIZE} x={45 * CELL_SIZE} y={30 * CELL_SIZE} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
            filters: [heduOutline],
        },
    };
}

export function toolbarSumTriangles(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / sum triangles`}>Součtové trojúhelníky</Translate>,
            itemIds: Object.keys(itemsSumTriangles()),
        },
    ];
}
