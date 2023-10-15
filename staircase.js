function staircase(n) {
  //     #
  //    ##
  //  ####
  // #####
  //######
  let temp = n;
  while (n--) {
    console.log(`${" "}`.repeat(n) + "#".repeat(temp - n));
  }
}

staircase(6);
