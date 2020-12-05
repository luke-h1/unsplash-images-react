#!/bin/bash

npm run lint 
rm -rf build/ 
npm run build 
vercel --prod 