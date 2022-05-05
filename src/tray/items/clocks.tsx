import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const RADIUS = 150;
const TICK_OFFSET = 10;
const TEXT_OFFSET = 50;

const TEXT_STYLE: React.CSSProperties = {
    stroke: 'none',
    strokeWidth: '0',
    fill: heduDrawingColors.stroke,
    fontWeight: 'bold',
    fontSize: '25px',
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    lineHeight: '25px',
};

function generateClock(every: number, numbers: boolean): JSX.Element {
    function getTickStyle(num: number): { stroke: number; length: number } {
        if (num % 15 === 0) {
            return {
                stroke: 5,
                length: 20,
            };
        }
        if (num % 5 === 0) {
            return {
                stroke: 4,
                length: 18,
            };
        }
        return {
            stroke: 3,
            length: 10,
        };
    }

    return (
        <g>
            <circle r={RADIUS} cx={0} cy={0} />
            <circle r={7} cx={0} cy={0} fill={heduDrawingColors.stroke} stroke="none" />

            {(() => {
                const result: JSX.Element[] = [];

                for (let i = 1; i <= 60; i++) {
                    // This seems incorrect, but it makes more sense in this case

                    if (i % every !== 0) {
                        continue;
                    }

                    const angle = ((Math.PI * 2) / 60) * i;
                    const xCoef = Math.sin(angle);
                    const yCoef = -Math.cos(angle);
                    const tickStyle = getTickStyle(i);

                    result.push(
                        <line
                            key={'l' + i}
                            x1={xCoef * (RADIUS - TICK_OFFSET)}
                            y1={yCoef * (RADIUS - TICK_OFFSET)}
                            x2={xCoef * (RADIUS - TICK_OFFSET - tickStyle.length)}
                            y2={yCoef * (RADIUS - TICK_OFFSET - tickStyle.length)}
                            strokeWidth={tickStyle.stroke}
                        />,
                    );

                    if (numbers) {
                        result.push(
                            <text
                                x={xCoef * (RADIUS - TEXT_OFFSET)}
                                y={yCoef * (RADIUS - TEXT_OFFSET)}
                                style={TEXT_STYLE}
                                key={'t' + i}
                            >
                                {i / 5}
                            </text>,
                        );
                    }
                }

                return result;
            })()}
        </g>
    );
}

function getDigitalNumber(x: number, y: number, width: number) {
    const style: React.CSSProperties = {
        strokeDasharray: '0 10',
        strokeWidth: width / 10,
    };

    return (
        <g>
            <line x1={x} y1={y + width * 0} x2={x + width + 1} y2={y + width * 0} style={style} />
            <line x1={x} y1={y + width * 1} x2={x + width + 1} y2={y + width * 1} style={style} />
            <line x1={x} y1={y + width * 2} x2={x + width + 1} y2={y + width * 2} style={style} />

            <line x1={x + width * 0} y1={y} x2={x + width * 0} y2={y + width * 2 + 1} style={style} />
            <line x1={x + width * 1} y1={y} x2={x + width * 1} y2={y + width * 2 + 1} style={style} />
        </g>
    );
}

export function itemsClocks(): ITrayDynamicItemList {
    return {
        clockOneMinute: {
            content: generateClock(1, false),
            defaultColor: heduDrawingColors.white,
        },
        clockFiveMinutes: {
            content: generateClock(5, false),
            defaultColor: heduDrawingColors.white,
        },
        clockFiveMinutesNumbers: {
            content: generateClock(5, true),
            defaultColor: heduDrawingColors.white,
        },
        clockDigital: {
            content: (
                <g>
                    {getDigitalNumber(60 * 0, 0, 40)}
                    {getDigitalNumber(60 * 1, 0, 40)}
                    <circle r={3} cx={60 * 1 + 65} cy={40 - 20} fill={heduDrawingColors.stroke} />
                    <circle r={3} cx={60 * 1 + 65} cy={40 + 20} fill={heduDrawingColors.stroke} />
                    {getDigitalNumber(60 * 2 + 30, 0, 40)}
                    {getDigitalNumber(60 * 3 + 30, 0, 40)}
                </g>
            ),
            defaultColor: heduDrawingColors.stroke,
        },
    };
}

export function toolbarClocks(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / clocks / analog`}>Ciferníky</Translate>,
            itemIds: ['clockOneMinute', 'clockFiveMinutes', 'clockFiveMinutesNumbers'],
        },
        {
            title: <Translate name={`Hedu / clocks / digital`}>Digitální hodiny</Translate>,
            itemIds: ['clockDigital'],
            scale: 0.6,
        },
    ];
}
