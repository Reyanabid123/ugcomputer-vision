# Initialize the counter variable
count = 0

# Start the loop from 1 to 1,000,000,000
for i in range(1, 1000000001):
    # Increment the count
    count = i
    
    # Print the count every 100,000,000 iterations to avoid excessive logging
    if i % 100000000 == 0:
        print('Current count:', count)

# Final print to show the completion of counting
print('Counting complete. Final count:', count)
