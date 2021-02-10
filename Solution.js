let twoSum = (nums, target) => {
    let map = new Map; //create a map to keep track of numbers
    for(let i = 0; i < nums.length; i++) { //loop through the list of nums
        let comp = target - nums[i]; //make a variable that stores the solution subtracted from the current num in nums
        if(map.has(comp)) { //if the map contains comp return the indexes that add up to target
            return [map.get(comp), i]
        }
        map.set(nums[i], i); //if the map doesn't have comp, store the num at current index and the index itself
    }
}
