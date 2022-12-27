function twoSum(nums: number[], target: number): number[] {
  const result: [number, number] = [-1, -1];

  // Map<value, index>
  const compliments = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const compliment = target - number;
    if (compliments.has(compliment)) {
      const index = compliments.get(compliment);
      return [index === undefined ? 0 : index, i];
    }
    compliments.set(number, i);
  }

  return result;
}
