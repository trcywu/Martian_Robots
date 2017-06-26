# Martian Robots

## Introduction

This is a code challenge completed in vanilla JavaScript and testing with Jasmine.

## Run instructions

To run application:
open ```robots.html``` in browser.

To run tests:
open```testRunner.html``` in a browser.

## Assumptions
- There are no spaces between the grid coordinates
- There are no spaces between the Robot starting inputs
- Grid coordinates, Robot starting position and instructions in the sample input are all separated by a new line break
- Instructions between new robots are separated by 2 new line breaks
- There is ambiguity whether orientation of Robot is captured when they are lost
from the grid point. It is assumed that they are able to move off from the same grid point twice
when located at the four corners of the grid.

## Updates made as at 26/06/2017

- LOST now leaves a 'scent' and is pushed into a history array to be checked against. The history checks the coordinate and orientation of the robot. This allows the four corners of the grid (0,0), (0,3), (0,5),(5,3) to be taken into consideration, as technically a robot can be lost twice at those locations due to a different orientation.
- The program has been extended to take the entire sample input as one string and then each Robot is processed sequentially
- The UI has been changed to take only one input
- Assumptions have been updated



## Further Improvements
- Refactor code to be more functional. To write functions that are not mutating a variable e.g currently updatePosition isn't pure because it is mutating history. Functional programming is very much a work in progress for me and something that I am actively trying to apply to my code but still learning how to
- UpdatePosition() to be refactored to take out history and using map to process the instruction. This will also make it easier for additional command types to be introduced in the future
- Wrap all code in an IIFE as to not pollute the global scope
