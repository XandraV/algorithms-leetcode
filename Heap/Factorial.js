function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(4);

/*
Call stack for factorial(4):

factorial(4)
    -> 4 * factorial(3)
            -> 3 * factorial(2)
                    -> 2 * factorial(1)
                            -> returns 1
                    <- 2 * 1 = 2
            <- 3 * 2 = 6
    <- 4 * 6 = 24

    Call stack visualization:
    |factorial(4)| = |1!|
    |factorial(3)| = |2!|
    |factorial(2)| = |3!|
    |factorial(1)| = |4!|
    |____________| = |__|
*/
