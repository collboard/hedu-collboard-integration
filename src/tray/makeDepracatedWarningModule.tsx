import { Factory, IModuleDefinition, IModuleManifest, NotificationSystem, Translate } from '@collboard/modules-sdk';
import { Destroyable } from 'destroyable';
import React from 'react';

export function makeDepracatedWarningModule(protoModule: { manifest: IModuleManifest }): Factory<IModuleDefinition> {
    return () => {
        const { manifest } = protoModule;
        return {
            manifest,
            async setup(systems) {
                const { translationsSystem, notificationSystem, routingSystem } = await systems.request(
                    'translationsSystem',
                    'notificationSystem',
                    'routingSystem',
                );
                notificationSystem.publish({
                    title: (
                        <Translate
                            name={`Deprecated / title`}
                            parameters={{ moduleName: translationsSystem.pickMessage(manifest.title || manifest.name) }}
                        >
                            {/* TODO: How to deal with parameters in component syntax - @see https://github.com/collboard/collboard/pull/533/*/}
                            Používáte zastaralou verzi doplňku {/* $moduleName */}
                        </Translate>
                    ),
                    body: (
                        <Translate
                            name={`Deprecated / body`}
                            parameters={{ moduleName: translationsSystem.pickMessage(manifest.title || manifest.name) }}
                        >
                            Modul $moduleName, který používáte, je zastaralý. Odinstalujte prosím tuto verzi a
                            nainstalujte si novou tlačítkem "Přidat funkce"
                        </Translate>
                    ),
                    tag: manifest.name + 'Deprecated',
                    canBeClosed: false,
                    type: 'error',
                    actions: [
                        {
                            action: 'openStore',
                            title: <Translate name={`Deprecated / button`}>Otevřít správce doplňků</Translate>,
                            icon: 'package',
                            onClick: () => {
                                routingSystem.urlVariables.setValue({ moduleName: 'ModuleStore' });
                                notificationSystem.constrict('HeduDeprecated');
                            },
                        },
                    ],
                });

                return new DestroyableNotification(notificationSystem, manifest.name + 'Deprecated');
            },
        };
    };
}

class DestroyableNotification extends Destroyable {
    public constructor(private notificationSystem: NotificationSystem, private tagToBeClosed: string) {
        super();
    }

    public async destroy() {
        await super.destroy();

        this.notificationSystem.constrict(this.tagToBeClosed);
    }
}
