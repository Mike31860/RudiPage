#!/bin/bash
if [ ! -d "deploys" ]
        then
                mkdir deploys
fi

yarn build:release-ud2
zip -r pagerudiud.zip.zip build
mv pagerudiud.zip.zip deploys/pagerudiud.zip.war
