def fizzBuzz(num):
    for i in range(1,num+1,1):
        if i % 3 == 0 and i % 5 ==0:
            print('FizzBuzz', i)

        elif i % 3 == 0:
            print('Fizz', i)
            
        elif i % 5 == 0:
            print('Buzz', i)

    return i

print(fizzBuzz(20))

# Given an array of integers nums and an integer target, 
# return indices of the two numbers such that they add up to target

def twoSums(input, target):
    for i in range(len(input)):
        for j in range(len(input)):
            if input[i] + input[j] == target:
                return i,j

print(twoSums([2,7,11,3], 18))
print(twoSums([6,4], 10))
print(twoSums([7,1,12,9,5], 6))

# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
# such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Needs work

def threeSum(nums): 
    for i in range(len(nums)):
        for j in range(len(nums)):
            for k in range(len(nums)):
                if nums[i] + nums[j] + nums[k] == 0:
                    return [nums[i], nums[j], nums[k]]

print(threeSum([-1,0,1,2,-1,-4]))
