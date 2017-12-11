#!/bin/bash
  echo "" > app.min.js
  cat md5.min.js >> app.min.js
  printf  "\n;\n" >> app.min.js
  cat notes.js >> app.min.js
  printf  "\n;\n" >> app.min.js
  cat instruments.js >> app.min.js
  printf  "\n;\n" >> app.min.js
  cat app.js >> app.min.js
  printf  "\n;\n" >> app.min.js
