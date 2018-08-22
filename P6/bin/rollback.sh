#!/bin/bash

rm -rf ../blog
cp -f ../blog-backup ../blog
bin/stop.sh
bin/start.sh
