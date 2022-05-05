import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { heduOutline } from '../heduFilters';

const WIDTH = 140;
const LABEL_WIDTH = 120;
const HEIGHT = 50;
const HEADING_FILL = '#FFFFFF';
const TEXT_STYLE: React.CSSProperties = {
    stroke: 'none',
    strokeWidth: '0',
    fill: heduDrawingColors.stroke,
    fontWeight: 'bold',
    fontSize: '20px',
    textAnchor: 'start',
    dominantBaseline: 'middle',
    lineHeight: '20px',
};
const TEXT_STYLE_CENTERED: React.CSSProperties = {
    ...TEXT_STYLE,
    textAnchor: 'middle',
};
const TEXT_OFFSET = 10;

function generateTable(stops: number, sum: boolean): JSX.Element {
    return (
        <g>
            {(() => {
                const stopLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

                const result: JSX.Element[] = [];

                result.push(
                    <rect key={1} width={LABEL_WIDTH} height={HEIGHT} x={0} y={1 * HEIGHT} fill={HEADING_FILL}></rect>,
                    <rect key={2} width={LABEL_WIDTH} height={HEIGHT} x={0} y={2 * HEIGHT} fill={HEADING_FILL}></rect>,
                    <rect
                        width={LABEL_WIDTH + WIDTH / 2}
                        height={HEIGHT}
                        x={0}
                        y={3 * HEIGHT}
                        fill={HEADING_FILL}
                        key={3}
                    ></rect>,
                    <text key={4} x={TEXT_OFFSET} y={1.5 * HEIGHT} style={TEXT_STYLE}>
                        <Translate name={`Hedu / bus / out`}>vystoupili</Translate>
                    </text>,
                    <text key={5} x={TEXT_OFFSET} y={2.5 * HEIGHT} style={TEXT_STYLE}>
                        <Translate name={`Hedu / bus / in`}>nastoupili</Translate>
                    </text>,
                    <text key={6} x={TEXT_OFFSET} y={3.5 * HEIGHT} style={TEXT_STYLE}>
                        <Translate name={`Hedu / bus / went`}>jeli</Translate>
                    </text>,
                );

                if (sum) {
                    result.push(
                        <rect
                            width={LABEL_WIDTH + WIDTH / 2}
                            height={HEIGHT}
                            x={0}
                            y={4 * HEIGHT}
                            fill={HEADING_FILL}
                            key={7}
                        ></rect>,
                        <text x={TEXT_OFFSET} y={4.5 * HEIGHT} style={TEXT_STYLE} key={8}>
                            <Translate name={`Hedu / bus / sum`}>celkem</Translate>
                        </text>,
                    );
                }

                // Main grid
                for (let x = 0; x < stops; x++) {
                    result.push(
                        <rect
                            width={WIDTH}
                            height={HEIGHT}
                            x={x * WIDTH + LABEL_WIDTH}
                            y={0 * HEIGHT}
                            fill={HEADING_FILL}
                            key={x + '_1'}
                        ></rect>,
                        <rect
                            width={WIDTH}
                            height={HEIGHT}
                            x={x * WIDTH + LABEL_WIDTH}
                            y={1 * HEIGHT}
                            key={x + '_2'}
                        ></rect>,
                        <rect
                            width={WIDTH}
                            height={HEIGHT}
                            x={x * WIDTH + LABEL_WIDTH}
                            y={2 * HEIGHT}
                            key={x + '_3'}
                        ></rect>,
                        <text
                            x={x * WIDTH + LABEL_WIDTH + WIDTH / 2}
                            y={0.5 * HEIGHT}
                            style={TEXT_STYLE_CENTERED}
                            key={x + '_4'}
                        >
                            {stopLetters[x]}
                        </text>,
                    );
                    if (x !== stops - 1) {
                        result.push(
                            <rect
                                width={WIDTH}
                                height={HEIGHT}
                                x={(x + 0.5) * WIDTH + LABEL_WIDTH}
                                y={3 * HEIGHT}
                                key={x + '_5'}
                            ></rect>,
                        );
                        if (sum) {
                            result.push(
                                <rect
                                    width={WIDTH}
                                    height={HEIGHT}
                                    x={(x + 0.5) * WIDTH + LABEL_WIDTH}
                                    y={4 * HEIGHT}
                                    key={x + '_6'}
                                ></rect>,
                            );
                        }
                    }
                }

                return result;
            })()}
        </g>
    );
}

function generateTables(min: number, max: number): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    for (let i = min; i <= max; i++) {
        result['bus' + i] = {
            content: generateTable(i, false),
            defaultColor: '#F3F587',
            filters: [heduOutline],
        };
    }

    for (let i = min; i <= max; i++) {
        result['busSum' + i] = {
            content: generateTable(i, true),
            defaultColor: heduDrawingColors.input,
            filters: [heduOutline],
        };
    }

    return result;
}

function generateIds(min: number, max: number, sum: boolean) {
    const result: string[] = [];

    for (let i = min; i <= max; i++) {
        if (sum) {
            result.push('busSum' + i);
        } else {
            result.push('bus' + i);
        }
    }

    return result;
}

const MIN = 3;
const MAX = 5;

export function itemsBus(): ITrayDynamicItemList {
    return {
        ...generateTables(MIN, MAX),
        passengerBlue: {
            content: <rect width="20" height="20" x="0" y="0" stroke="none" />,
            defaultColor: '#2D68A0',
        },
        passengerRed: {
            content: <polygon points="10, 0 0, 20 20, 20" stroke="none" />,
            defaultColor: heduDrawingColors.red,
        },
    };
}

export function toolbarBus(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / bus / passengers`}>Cestující</Translate>,
            itemIds: ['passengerBlue', 'passengerRed'],
            scale: 1,
        },
        { title: <Translate name={`Hedu / bus / buses`}>Autobusy</Translate>, itemIds: generateIds(MIN, MAX, false) },
        {
            title: <Translate name={`Hedu / bus / buses with sum row`}>Autobusy s řádkem "celkem"</Translate>,
            itemIds: generateIds(MIN, MAX, true),
        },
    ];
}
