// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

let twoSum = function(nums, target) {
    let temp=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]=== target){
                temp.push(i,j);
                return temp;
            }
        }
    }
};
