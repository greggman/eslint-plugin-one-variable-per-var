[![Build Status](https://travis-ci.org/greggman/eslint-plugin-one-variable-per-var.svg)](https://travis-ci.org/greggman/eslint-plugin-one-variable-per-var)

# eslint-plugin-one-variable-per-var

<a href="http://eslint.org/">ESLint</a> rule for enforcing one variable per var statement.

## Why Use It

You like consistency

Here are 3 consistent lines

    var a = 1;
    var b = 2;
    var c = 3;

Here are 3 inconsistent lines

    var a = 1,
        b = 2,
        c = 3;

The first line has a var and ends with a comma, the second line has no var and ends with a comma,
the 3rd line has no var and ends with a semicolon. That's not consistent.

Further, copying, cutting, pasting in other variables requires more editing in the inconsistent case
and requires having to deal with lines other than the ones you're editing. If I add `d` as a var I
should not have to care about the line `c` is on. In the consistent case each line has no dependecnes.
In inconsistent case each line is dependent on 1 or more other lines.

## Further Reading

* http://eslint.org/

