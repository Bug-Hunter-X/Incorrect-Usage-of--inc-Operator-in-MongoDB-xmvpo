```javascript
// Correct usage of $inc operator using $inc with $set to handle cases where the field might not exist
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 }, $setOnInsert: { age: 0 }});
```