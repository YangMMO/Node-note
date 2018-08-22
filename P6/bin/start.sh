#!/bin/bash

echo "server start"
nphup node server.js >> /data/server.log 2>&1 &