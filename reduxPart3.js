// Redux Part 3

// 1. A change of code was made on line 174 (figure 4), can you briefly explain what that would do?

// The change of code would allow the increment action to increment the state value by any number passed in the payload property of the action object. This is achieved by adding the payload property to the state value in the return statement of the reducer function.



// 2. Let’s say we don’t want to set the state locally anymore and want to use dispatch. How would you ensure that an “increment” action that also contains the result of the studentCount is dispatched on button click? According to your answer in part 2.2b what would need to be changed?

// to dispatch an increment action with the result of the studentsCount, you would need to use the dispatch function provided by a Redux store, rather than updating the state locally with setStudentsCount.



// 3. Which code do you think is best suited to ensure that the “increment” action updatesthe state with the correct total number of students who are present. Is it Figure 4? Or Figure 5? Explain the code difference and your reasoning

// The code in Figure 4 is best suited to ensure that the “increment” action updates the state with the correct total number of students who are present. This is because the code in Figure 4 adds the payload property to the state value in the return statement of the reducer function. This allows the increment action to increment the state value by any number passed in the payload property of the action object. The code in Figure 5 does not add the payload property to the state value in the return statement of the reducer function. This means that the increment action will not increment the state value by any number passed in the payload property of the action object.