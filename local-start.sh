#!/bin/bash
(cd units; serverless offline -P 3000) &
(cd structures; serverless offline -P 3001) &
(cd resources; serverless offline -P 3002)