// const merge = function (nums1, m, nums2, n) {
//   let p1 = 0;
//   let p2 = 0;
//   while (nums2.length > 0 && p1 < m + n) {
//     // check which is smaller between nums1[0] and nums2[0]
//     if (nums1[p1] === 0) {
//       nums1[p1] = nums2[p2];
//       p2++;
//       p1++;
//     } else if (nums1[p1] <= nums2[p2]) {
//       p1++;
//       continue;
//     } else {
//       let hold = nums1[p1];
//       nums1[p1] = nums2[p2];
//       nums2[p2] = hold;
//       //   console.log("nums 2: ", nums2);
//       p1++;
//     }
//   }
//   console.log(nums1);
// };



const merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  console.log(nums1);
};


merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
