import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';

const SIZE = 60;
const HEADING_FILL = '#D3D2D2';
const MAIN_FILL = '#FFFFFF00';
const SECONDARY_FILL = '#FAB6A3';

function generateTable(rows: number, cols: number): JSX.Element {
    return (
        <g style={{ strokeWidth: 2 }}>
            {(() => {
                const result: JSX.Element[] = [];

                result.push(
                    <rect
                        width={SIZE * (rows + cols + 1)}
                        height={SIZE * (rows + 2)}
                        x={0}
                        y={0}
                        fill="#FFFFFF"
                        key={'bg'}
                    ></rect>,
                );

                // Diagonal grid (main part)
                for (let x = 0; x < cols; x++) {
                    const xStart = SIZE * (x + rows);
                    const path = [
                        'M',
                        xStart,
                        SIZE,
                        'L',
                        xStart - rows * SIZE,
                        rows * SIZE + SIZE,
                        'L',
                        xStart - rows * SIZE + SIZE,
                        rows * SIZE + SIZE,
                        'L',
                        xStart + SIZE,
                        SIZE,
                        'Z',
                    ].join(' ');
                    if ((cols + 2 - x + (rows % 2)) % 2 === 0) {
                        result.push(<path d={path} key={x} />);
                    } else {
                        result.push(<path d={path} fill={MAIN_FILL} key={'diagonal1_' + x} />);
                    }
                }

                // Diagonal grid (additional part)
                for (let y = 0; y < rows; y++) {
                    const yStart = (y + 1) * SIZE;
                    const xReal = (rows + cols) * SIZE;
                    const xStart = SIZE * (cols + rows + y);
                    const path = [
                        'M',
                        xReal,
                        yStart,
                        'L',
                        xStart - rows * SIZE,
                        rows * SIZE + SIZE,
                        'L',
                        xStart - rows * SIZE + SIZE,
                        rows * SIZE + SIZE,
                        'L',
                        xReal,
                        yStart + SIZE,
                        'Z',
                    ].join(' ');

                    if ((rows - y) % 2 === 0) {
                        result.push(<path d={path} key={'diagonal2_' + y} />);
                    } else {
                        result.push(<path d={path} fill={MAIN_FILL} key={'diagonal2_' + y} />);
                    }
                }

                // Main grid
                for (let y = 0; y < rows + 2; y++) {
                    for (let x = 0; x < cols + rows + 1; x++) {
                        if (y === 0 && x >= rows && x < cols + rows) {
                            // Heading of cols
                            result.push(
                                <rect
                                    width={SIZE}
                                    height={SIZE}
                                    x={x * SIZE}
                                    y={y * SIZE}
                                    fill={HEADING_FILL}
                                    key={'main_' + x + 'x' + y}
                                />,
                            );
                        } else if (x === cols + rows && y !== 0 && y !== rows + 1) {
                            // Heading of rows
                            result.push(
                                <rect
                                    width={SIZE}
                                    height={SIZE}
                                    x={x * SIZE}
                                    y={y * SIZE}
                                    fill={HEADING_FILL}
                                    key={'main_' + x + 'x' + y}
                                />,
                            );
                        } else if (y === rows + 1 && x !== cols + rows && (cols + rows - x) % 2 === 0) {
                            // Footer of cols (secondary color)
                            result.push(
                                <rect
                                    width={SIZE}
                                    height={SIZE}
                                    x={x * SIZE}
                                    y={y * SIZE}
                                    key={'main_' + x + 'x' + y}
                                />,
                            );
                        } else {
                            result.push(
                                <rect
                                    width={SIZE}
                                    height={SIZE}
                                    x={x * SIZE}
                                    y={y * SIZE}
                                    fill={MAIN_FILL}
                                    key={'main_' + x + 'x' + y}
                                />,
                            );
                        }
                    }
                }

                result.push(
                    <rect
                        width={SIZE * (rows + cols + 1)}
                        height={SIZE * (rows + 2)}
                        x={0}
                        y={0}
                        fill="none"
                        key={'outline'}
                        style={{ strokeWidth: 4 }}
                    ></rect>,
                );

                return result;
            })()}
        </g>
    );
}

function generateTables(
    minWidth: number,
    maxWidth: number,
    minHeight: number,
    maxHeight: number,
): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    for (let width = minWidth; width <= maxWidth; width++) {
        for (let height = minHeight; height <= maxHeight; height++) {
            result['indianMultiplication' + width + 'x' + height] = {
                content: generateTable(height, width),
                defaultColor: SECONDARY_FILL,
            };
        }
    }

    return result;
}

function generateIds(minW: number, maxW: number, minH: number, maxH: number): string[] {
    const result: string[] = [];

    for (let w = minW; w <= maxW; w++) {
        for (let h = minH; h <= maxH; h++) {
            result.push('indianMultiplication' + w + 'x' + h);
        }
    }

    return result;
}

export function itemsIndianMultiplication(): ITrayDynamicItemList {
    return generateTables(2, 4, 1, 3);
}

export function toolbarIndianMultiplication(): ITrayDynamicToolbarGroup {
    return [
        {
            title: (
                <Translate name={`Hedu / indian multiplication / multiplicating number of length 1`}>
                    Indické násobení dvojciferného čísla
                </Translate>
            ),
            itemIds: generateIds(2, 2, 1, 3),
        },
        {
            title: (
                <Translate name={`Hedu / indian multiplication / multiplicating number of length 2`}>
                    Indické násobení trojciferného čísla
                </Translate>
            ),
            itemIds: generateIds(3, 3, 1, 3),
        },
        {
            title: (
                <Translate name={`Hedu / indian multiplication / multiplicating number of length 3`}>
                    Indické násobení čtyřciferného čísla
                </Translate>
            ),
            itemIds: generateIds(4, 4, 1, 3),
        },
    ];
}
