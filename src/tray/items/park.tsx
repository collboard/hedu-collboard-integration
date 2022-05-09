import { ITrayDynamicItemList, ITrayDynamicToolbarGroup, Translate } from '@collboard/modules-sdk';
import React from 'react';
import kid01 from '../../../assets/tray/park/kid01.svg';
import kid02 from '../../../assets/tray/park/kid02.svg';
import kid03 from '../../../assets/tray/park/kid03.svg';
import park from '../../../assets/tray/park/park.svg';
import station01 from '../../../assets/tray/park/station01.svg';
import station02 from '../../../assets/tray/park/station02.svg';
import station03 from '../../../assets/tray/park/station03.svg';
import station04 from '../../../assets/tray/park/station04.svg';
import station05 from '../../../assets/tray/park/station05.svg';
import station06 from '../../../assets/tray/park/station06.svg';
import station07 from '../../../assets/tray/park/station07.svg';
import station08 from '../../../assets/tray/park/station08.svg';
import station09 from '../../../assets/tray/park/station09.svg';
import station10 from '../../../assets/tray/park/station10.svg';
import { heduDrawingColors } from '../HeduColorAttributeModule';

const stations = {
    station01,
    station02,
    station03,
    station04,
    station05,
    station06,
    station07,
    station08,
    station09,
    station10,
};
const kids = { kid01, kid02, kid03 };

function generateStations() {
    const result: ITrayDynamicItemList = {};

    Object.values(stations).forEach((href, index) => {
        result['parkStation' + (index + 1)] = {
            content: (
                <g>
                    <image preserveAspectRatio="xMidYMid meet" x="0" y="0" width="150" height="150" xlinkHref={href} />
                </g>
            ),
            defaultColor: heduDrawingColors.white,
        };
    });

    return result;
}

function generateKids() {
    const result: ITrayDynamicItemList = {};

    Object.values(kids).forEach((href, index) => {
        result['parkKid' + (index + 1)] = {
            content: (
                <g>
                    <image preserveAspectRatio="xMidYMid meet" x="0" y="0" width="150" height="150" xlinkHref={href} />
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
                    <image preserveAspectRatio="xMidYMid meet" x="0" y="0" width="600" height="500" xlinkHref={park} />
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
