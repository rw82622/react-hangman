Hangman!
===================
In this exercise, you will recreate the word game Hangman.

In addition to building the app end-to-end independently, you'll learn the power of chaining array transformations (like map and filter) - a pillar of functional programming.

Primary Objectives
-------------
The interface should contain the following components:
* A component that displays the puzzle word (letters should be separated by spaces).  Letters that haven't been guessed should be displayed as an underscore - letters that have been guessed should be displayed.
* A component that contains a text input and a button to submit the guessed letter.  If the letter submitted has already been guessed, display an `alert()`.
* A component that displays letters that are not part of the puzzle word.

One last requirement: there should only be two properties within `App.js`'s state:

 - **puzzle** - this should be the puzzle word (a string)
 - **guessedLetters** - this should be an array of all the letters that were guessed.

A JSON array is below - store it and import it appropriately in the codebase you create.

Secondary Objectives
-------------
* If someone guesses more 6 letters that aren't part of the word, an alert displaying that the game is over should be displayed.


Hints
-----
* Don't forget `split()` and `join()`
* You surely will also use the Array object's `map()` and `filter()` functions.


Words
-----
```
[
  "marriageproof",
  "minionette",
  "unlichened",
  "electrocardiographic",
  "hippophagy",
  "polyphore",
  "debellate",
  "zyga",
  "antedonin",
  "hirudinean",
  "foremastman",
  "metapolitics",
  "bianisidine",
  "gros",
  "superindifferent",
  "collar",
  "maculose",
  "unphysically",
  "narrowish",
  "Bartonia",
  "inadherent",
  "arbitrary",
  "forefeelingly",
  "palame",
  "vina",
  "northwestward"
]
```