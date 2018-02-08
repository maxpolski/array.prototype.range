# Array.prototype.range
adds ability to create array from provided range

#Usage

`Array.range(start, [end, [step]])`

#Example

`Array.range(1, 7, 2); // [1, 3, 5]`

`Array.range(1, 7); // [1, 2, 3, 4, 5, 6]`

`Array.range(7); // [0, 1, 2, 3, 4, 5, 6]`

`[].range(1, 7, 2); // [1, 3, 5]`

`[].range(1, 7); // [1, 2, 3, 4, 5, 6]`

`[].range(7); // [0, 1, 2, 3, 4, 5, 6]`
