import React from 'react';
import { Vector } from 'xyzt';
import { Authors } from '@collboard/modules-sdk';
import { internalModules } from '@collboard/modules-sdk';
import { makeArtModule } from '@collboard/modules-sdk';
import { Abstract2dArt } from '@collboard/modules-sdk';
import { makeDepracatedWarningModule } from './makeDepracatedWarningModule';

/**
 * Note: In future this file will we in independent repository as external module.
 */

internalModules.declareModule(
    makeDepracatedWarningModule({
        manifest: {
            name: 'HeduTool',
            title: { en: 'H-edu', cs: 'H-edu' },
            description: {
                en: 'This module is deprecated, please deactivate it and use the new one...',
                cs: 'Tento modul je zastaralý, odinstalujte ho a použijte nový, prosím...',
            },
            flags: { isDeprecated: true }, // ['deprecated']
            categories: ['Math', 'Education'],
            icon: 'http://localhost:9980/icons/hejny.svg',
            author: Authors.hedu,
            contributors: [Authors.rosecky],
        },
    }),
);

// TODO: !! Is this working?
// TODO: !! Migrations
//       > internalModules.declareModule(() => makeArtModule({ name: 'Hedu', class: HeduDeprecatedArt }));
internalModules.declareModule(() => makeArtModule(HeduDeprecatedArt));

/**
 * @deprecated
 */
class HeduDeprecatedArt extends Abstract2dArt {
    /**
     * Note: Due to legacy reasons, naming is:
     *  - Version 1: 'Hedu' (not 'HeduDeprecatedArt')
     *  - Version 2: 'HeduV2' (not 'HeduArt')
     */
    public static serializeName = 'Hedu';
    public static manifest = {
        // Note+TODO: All modules should be in format @collboard/module-name but we started with art modules
        name: '@collboard/hedu-art-deprecated',
        // TODO: Deprecation should be made with versioning
    };

    acceptedAttributes = [];

    topLeftCorner = Vector.zero();
    bottomRightCorner = Vector.zero();

    render() {
        return <></>;
    }
}
