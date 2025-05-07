function ave(nums) {
    let sum = 0 ;
    let i = 0 ;
    while (i < nums.length) {
        sum = sum + nums[i];
        i++;

    }

    return sum/(nums.length) ;
}

let Marks = [10,10,11,10,10];
console.log(ave(Marks));