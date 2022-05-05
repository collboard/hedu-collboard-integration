import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';

function generateCoins(values: number[]): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    values.forEach((value, index) => {
        result['coin' + value] = {
            content: (
                <g style={{ transform: 'scale(' + (0.8 + index * 0.1) + ')' }}>
                    <circle r={30} cx={0} cy={0} />
                    <text
                        x={0}
                        y={15}
                        style={{
                            fill: 'none',
                            fontWeight: 'bold',
                            fontSize: '40px',
                            textAnchor: 'middle',
                        }}
                    >
                        {value}
                    </text>
                </g>
            ),
            defaultColor: '#C2C2C4',
        };
    });

    return result;
}

export function itemsCoins(): ITrayDynamicItemList {
    return {
        ...generateCoins([1, 2, 5, 10, 20, 50]),
        coinEmpty: {
            content: (
                <g>
                    <circle r={40} cx={0} cy={0} />
                </g>
            ),
            defaultColor: '#C2C2C4',
        },
    };
}

export function toolbarCoins(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Hedu / coins / coin`}>Mince</Translate>,
            itemIds: Object.keys(generateCoins([1, 2, 5, 10, 20, 50])),
        },
        { title: <Translate name={`Hedu / coins / empty coin`}>Prázdná mince</Translate>, itemIds: ['coinEmpty'] },
    ];
}
