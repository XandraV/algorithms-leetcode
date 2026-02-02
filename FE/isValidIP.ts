/**
IPv4
An IPv4 Address is represented in dot-decimal notation, consisting of 4 numbers
( called 'octet'), each ranging from 0 to 255, like 1.22.33.255. 
It has 32 bit, so there are maximum 2^32 = 4,294,967,296 IPv4 addresses.
Leading zeroes are not allowed in IPv4, like 01.01.01.01 is invalid.

IPv6
An IPv6 Address have 128 bits (which is a lot), separated by 8 groups 
(called 'hexadectet', or 'hextet', not fixed yet). Each group has 16 bits, 
so could be represented by a hexadecimal string at 4 digits, 
such as 2001:0db8:85a3:0000:0000:8a2e:0370:7334.

Notice that leading zeroes are allowed in IPv6.
There are other valid format of IPv6 addresses, 
like Zero compression, but it is beyond the scope here, you can ignore them.

Task
You are given some random string, please write a function if it is valid IPv4 or IPv6 address.

 */
function isValidIP(str: string): boolean {
  const isIPv4 = str.includes(".");
  const isIPv6 = str.includes(":");
  if (isIPv4 && isIPv6) return false; //reject strings that contain both . and :

  if (isIPv4) {
    const parts = str.split(".");
    if (parts.length !== 4) return false;

    return parts.every((part) => {
      // if (!/^\d+$/.test(part)) return false;
      if (!/^[0-9]+$/.test(part)) return false;
      if (part.length > 1 && part[0] === "0") return false;
      const num = Number(part);
      return num >= 0 && num <= 255;
    });
  }
  if (isIPv6) {
    const parts = str.split(":");
    if (parts.length !== 8) return false;

    return parts.every((part) => /^[0-9a-fA-F]{1,4}$/.test(part));
  }

  return false;
}

console.log(isValidIP("1.22.33.255")); // true
console.log(isValidIP("1.22.33.255")); // false

console.log(isValidIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // true
