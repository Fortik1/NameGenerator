#!/usr/bin/env node
import name from "../src/arrayName.js";
import {randomNumber} from "../src/index.js";

console.log(`You get name: ${name(randomNumber)}!`);