<?php

function backspaceCompare($s, $t)
{
    $p1 = strlen($s) - 1;
    $p2 = strlen($t) - 1;
    $count1 = 0;
    $count2 = 0;

    while ($p1 >= 0 || $p2 >= 0) {
        while ($p1 >= 0) {
            if ($s[$p1] === "#") {
                $count1++;
                $p1--;
            } else if ($p1 >= 0 && $count1 > 0) {
                $count1--;
                $p1--;
            } else {
                break;
            }
        }

        while ($p2 >= 0) {
            if ($t[$p2] === "#") {
                $count2++;
                $p2--;
            } else if ($p2 >= 0 && $count2 > 0) {
                $count2--;
                $p2--;
            } else {
                break;
            }
        }

        if ($p1 >= 0 && $p2 >= 0 && $s[$p1] !== $t[$p2]) {
            return false;
        } else if ($p1 < 0 && $p2 >= 0 || $p1 >= 0 && $p2 < 0) {
            return false;
        } else {
            $p1--;
            $p2--;
        }
    }

    return true;
}

print backspaceCompare("ab#c","ad#c");
