import React from 'react';
import { ITrayDynamicItemList } from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { heduDrawingColors } from '../HeduColorAttributeModule';

function generateOperators(operators: { [key: string]: string }): ITrayDynamicItemList {
    const result: ITrayDynamicItemList = {};

    Object.keys(operators).forEach((operator) => {
        result['operator' + operator] = {
            content: (
                <text
                    x="0"
                    y="0"
                    style={{
                        stroke: 'none',
                        strokeWidth: '0',
                        fontWeight: 'bold',
                        fontSize: '40px',
                        textAnchor: 'middle',
                        lineHeight: '40px',
                    }}
                >
                    {operators[operator]}
                </text>
            ),
            defaultColor: heduDrawingColors.stroke,
        };
    });

    return result;
}

export function itemsOperators(): ITrayDynamicItemList {
    return generateOperators({
        Plus: '+',
        Minus: '-',
        Multiply: '×',
        Divide: ':',
        Greater: '>',
        Lower: '<',
        Equal: '=',
        GreaterEqual: '≥',
        LowerEqual: '≤',
    });
}
