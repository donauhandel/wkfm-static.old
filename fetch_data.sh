# bin/bash

echo "fetching transkriptions from wkfm-working-data"
rm -rf data/editions 
rm -rf data/meta 
curl -LO https://github.com/donauhandel/wkfm-working-data/archive/refs/heads/main.zip
unzip main
mv ./wkfm-working-data-main/data/editions/ ./data
mv ./wkfm-working-data-main/data/meta/ ./data

rm main.zip
rm -rf ./wkfm-working-data-main

add-attributes -g "data/editions/*.xml" -b "https://id.acdh.oeaw.ac.at/wkfm"