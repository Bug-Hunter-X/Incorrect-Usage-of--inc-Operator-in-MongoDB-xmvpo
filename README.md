# Incorrect Usage of $inc Operator in MongoDB
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB, which could lead to unexpected behavior in updating numerical fields.
The original code attempts to decrement the 'age' field, but it may have issues if the age field does not exist or if there is a type mismatch.