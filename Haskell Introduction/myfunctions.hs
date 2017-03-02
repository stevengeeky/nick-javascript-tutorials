-- Define what arguments `sum_up` will take in and what arguments it will output
sum_up :: [Float] -> Float

-- Define the base case, or the one thing that is known in order to stop infinite evaluation
sum_up [] = 0

-- Define the recursive case, or the rule applied to all possible cases (except the base case)
sum_up (x:xs) = x + (sum_up xs)

-- Repeat steps above
revert :: [a] -> [a]
revert [] = []
revert (x:xs) = (revert xs) ++ [x]

-- Example from haskell.org main site
primes = filterPrime [2..] 
  where filterPrime (p:xs) = p : filterPrime [x | x <- xs, x `mod` p /= 0]