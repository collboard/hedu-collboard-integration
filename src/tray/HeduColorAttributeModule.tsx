import React from 'react';
import { IconColor } from '../../../30-components/menu/Icon';
import { Authors } from '../../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../../50-systems/ModuleStore/internalModules';
import { makeAttributeModule } from '../../../50-systems/ModuleStore/makers/makeAttributeModule';

export const heduDrawingColors: { [key: string]: string } = {
    black: '#000000',
    stroke: '#1c3660',
    blue: '#67d5f6',
    green: '#00a54f',
    yellow: '#f5e614',
    red: '#e60000',
    input: '#F3F587',
    white: '#ffffff',
};

internalModules.declareModule(
    makeAttributeModule<string>({
        manifest: {
            flags: { isDevelopment: true, isExperimental: true }, // ['development', 'experimental']
            name: 'HeduColorAttribute',
            title: { en: 'H-edu colors', cs: 'H-edu barvy' },
            description: {
                en: 'Use similar colors as those on H-edu',
                cs: 'Používejte na svých tabulích stejné barvy, jako jsou na H-edu',
            },

            icon: 'http://localhost:9980/icons/hejny.svg',

            contributors: [Authors.rosecky],
            categories: ['Colors'],
        },
        standard: false,
        attribute: {
            type: 'string',
            name: 'color',
            defaultValue: heduDrawingColors.black,
            // TODO: pattern:
        },
        inputRender(value: string, onChange: (value: string) => void) {
            return (
                <>
                    {Object.keys(heduDrawingColors).map((key) => (
                        <IconColor
                            key={key}
                            color={heduDrawingColors[key]}
                            active={value === heduDrawingColors[key]}
                            onClick={() => onChange(heduDrawingColors[key])}
                        />
                    ))}
                </>
            );
        },
    }),
);
