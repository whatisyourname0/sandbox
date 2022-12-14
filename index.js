// rev-basic-3
const ans = [
  0x49, 0x60, 0x67, 0x74, 0x63, 0x67, 0x42, 0x66, 0x80, 0x78, 0x69, 0x69, 0x7b,
  0x99, 0x6d, 0x88, 0x68, 0x94, 0x9f, 0x8d, 0x4d, 0xa5, 0x9d, 0x45,
];

console.log(
  String.fromCharCode(
    ...ans.map((value, idx) => {
      return (value - 2 * idx) ^ idx;
    })
  )
);
