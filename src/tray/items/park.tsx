import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '../../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Translate } from '../../../../50-systems/TranslationsSystem/components/Translate';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const stations = [
    'station01.svg',
    'station02.svg',
    'station03.svg',
    'station04.svg',
    'station05.svg',
    'station06.svg',
    'station07.svg',
    'station08.svg',
    'station09.svg',
    'station10.svg',
];
const kids = ['kid01.svg', 'kid02.svg', 'kid03.svg'];
const park = 'park.svg';

function generateStations() {
    const result: ITrayDynamicItemList = {};

    stations.forEach((filename, index) => {
        result['parkStation' + (index + 1)] = {
            content: (
                <g>
                    <image
                        preserveAspectRatio="xMidYMid meet"
                        x="0"
                        y="0"
                        width="150"
                        height="150"
                        xlinkHref={'http://localhost:9980/modules/Hedu/park/' + filename}
                    />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        };
    });

    return result;
}

function generateKids() {
    const result: ITrayDynamicItemList = {};

    kids.forEach((filename, index) => {
        result['parkKid' + (index + 1)] = {
            content: (
                <g>
                    <image
                        preserveAspectRatio="xMidYMid meet"
                        x="0"
                        y="0"
                        width="150"
                        height="150"
                        xlinkHref={'http://localhost:9980/modules/Hedu/park/' + filename}
                    />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        };
    });

    return result;
}

export function itemsPark(): ITrayDynamicItemList {
    return {
        ...generateStations(),
        ...generateKids(),
        park: {
            content: (
                <g>
                    <image
                        preserveAspectRatio="xMidYMid meet"
                        x="0"
                        y="0"
                        width="600"
                        height="500"
                        xlinkHref={'http://localhost:9980/modules/Hedu/park/' + park}
                    />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        },
    };
}

export function toolbarPark(): ITrayDynamicToolbarGroup {
    return [
        { title: <Translate name={`Hedu / park / whole park`}>Celý park</Translate>, itemIds: ['park'], scale: 0.2 },
        {
            title: <Translate name={`Hedu / park / stations`}>Stanoviště</Translate>,
            itemIds: Object.keys(generateStations()),
        },
        { title: <Translate name={`Hedu / park / kids`}>Děti</Translate>, itemIds: Object.keys(generateKids()) },
    ];
}
