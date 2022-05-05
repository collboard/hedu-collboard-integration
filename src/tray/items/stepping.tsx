import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import { heduDrawingColors } from '../HeduColorAttributeModule';
import { heduOutline } from '../heduFilters';

const SIZE = 30;
const ARROW_HEAD_LENGTH = 15;
const ARROW_HEAD_WIDTH = 10;

const GAME_PIECE = (
    <path d="M10.798,69.07C6.688,69.125 4.578,69.156 4.464,69.156L4.464,61.144C4.519,58.305 4.856,55.379 5.477,52.366C6.039,49.356 7.084,46.572 8.604,44.017C10.124,41.403 11.28,38.761 12.068,36.092C12.856,33.481 13.137,30.78 12.911,27.996C12.686,25.212 11.814,22.345 10.294,19.391C8.774,16.493 8.323,13.539 8.941,10.526C9.617,7.517 11.308,5.416 14.011,4.223C15.195,3.71 16.378,3.426 17.558,3.37L17.728,3.37C19.026,3.426 20.262,3.71 21.445,4.223C24.205,5.416 25.895,7.517 26.516,10.526C27.134,13.539 26.686,16.493 25.166,19.391C23.642,22.345 22.771,25.212 22.545,27.996C22.32,30.78 22.629,33.481 23.475,36.092C24.263,38.761 25.388,41.403 26.853,44.017C28.376,46.572 29.417,49.356 29.98,52.366C30.601,55.379 30.937,58.305 30.993,61.144L30.993,69.156C30.882,69.156 28.768,69.125 24.656,69.07L10.798,69.07Z" />
);

function generateStripe(minNumber?: number, maxNumber?: number) {
    const result: JSX.Element[] = [];

    for (let i = -3; i < 18; i++) {
        result.push(<rect key={i + 'rect'} width="50" height="70" x={50 * i} y="0" />);
        if (minNumber !== undefined && maxNumber !== undefined && i >= minNumber && i <= maxNumber) {
            result.push(
                <text
                    x={50 * i + 25}
                    y={40}
                    style={{
                        stroke: 'none',
                        strokeWidth: '0',
                        fill: heduDrawingColors.stroke,
                        fontWeight: 'bold',
                        fontSize: '25px',
                        textAnchor: 'middle',
                        dominantBaseline: 'middle',
                    }}
                    key={i + 'text'}
                >
                    {i}
                </text>,
            );
        }
    }

    return <g>{result}</g>;
}

export function itemsStepping(): ITrayDynamicItemList {
    return {
        arrowRight: {
            content: (
                <g>
                    <line x1={0} y1={0} x2={SIZE} y2={0} />
                    <line x1={SIZE} y1={0} x2={SIZE - ARROW_HEAD_LENGTH} y2={-ARROW_HEAD_WIDTH} />
                    <line x1={SIZE} y1={0} x2={SIZE - ARROW_HEAD_LENGTH} y2={+ARROW_HEAD_WIDTH} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
        arrowLeft: {
            content: (
                <g>
                    <line x1={0} y1={0} x2={SIZE} y2={0} />
                    <line x1={0} y1={0} x2={ARROW_HEAD_LENGTH} y2={-ARROW_HEAD_WIDTH} />
                    <line x1={0} y1={0} x2={ARROW_HEAD_LENGTH} y2={+ARROW_HEAD_WIDTH} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
        arrowUp: {
            content: (
                <g>
                    <line y1={0} x1={0} y2={SIZE} x2={0} />
                    <line y1={0} x1={0} y2={ARROW_HEAD_LENGTH} x2={-ARROW_HEAD_WIDTH} />
                    <line y1={0} x1={0} y2={ARROW_HEAD_LENGTH} x2={+ARROW_HEAD_WIDTH} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
        arrowDown: {
            content: (
                <g>
                    <line y1={0} x1={0} y2={SIZE} x2={0} />
                    <line y1={SIZE} x1={0} y2={SIZE - ARROW_HEAD_LENGTH} x2={-ARROW_HEAD_WIDTH} />
                    <line y1={SIZE} x1={0} y2={SIZE - ARROW_HEAD_LENGTH} x2={+ARROW_HEAD_WIDTH} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },
        arrowTurn: {
            content: (
                <g>
                    <path d="m 0 0 a 15 15 0 1 0 15 0" fill="none" />
                    <line y1={0} x1={15} y2={2} x2={28} />
                    <line y1={0} x1={15} y2={13} x2={15} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },

        steppingSeparator: {
            content: (
                <g>
                    <line x1={0} y1={0} x2={0} y2={SIZE} />
                </g>
            ),
            defaultColor: heduDrawingColors.blue,
        },

        gamePieceRed: {
            content: GAME_PIECE,
            defaultColor: heduDrawingColors.red,
        },
        gamePieceBlue: {
            content: GAME_PIECE,
            defaultColor: heduDrawingColors.blue,
        },

        steppingStripe: {
            content: generateStripe(),
            defaultColor: heduDrawingColors.white,
            filters: [heduOutline],
        },
        steppingStripeNumbers: {
            content: generateStripe(0, 13),
            defaultColor: heduDrawingColors.white,
            filters: [heduOutline],
        },
        steppingStripeZero: {
            content: generateStripe(0, 0),
            defaultColor: heduDrawingColors.white,
            filters: [heduOutline],
        },
    };
}

export function toolbarStepping(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / stepping / stepping`}>Krokování</Translate>,
            itemIds: ['arrowRight', 'arrowLeft', 'steppingSeparator', 'arrowTurn'],
        },
        {
            title: <Translate name={`Hedu / stepping / arrows on grid`}>Šipkový zápis v mříži</Translate>,
            itemIds: ['arrowRight', 'arrowLeft', 'arrowUp', 'arrowDown'],
        },
        {
            title: <Translate name={`Hedu / stepping / figures`}>Figurky</Translate>,
            itemIds: ['gamePieceRed', 'gamePieceBlue'],
        },
        {
            title: <Translate name={`Hedu / stepping / stepping stripes`}>Krokovací pásy</Translate>,
            itemIds: ['steppingStripe', 'steppingStripeNumbers', 'steppingStripeZero'],
            scale: 0.3,
        },
    ];
}
