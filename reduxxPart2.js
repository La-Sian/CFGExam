// Redux Part 2

// a.Can you provide a brief summary on what is happening on line 34, 39?

// on line 34, a local state variable studentsCount is declared using the useState hook from React. The useState hook initializes studentsCount with a default value of 0 and also provides a function setStudentsCount that can be used to update the state

// on line 39, the button element is labeled " Add Stuent" and has an onClick event handler that calls the setStudentsCount function to update the state.



// 2. When a user clicks on the “Add student” button update the state (studentsCount) to include only the total number of students who are present. Using the data provided below:


function handleAddStudentClick():
    // Get the current studentsCount and setStudentsCount function from the state
    [currentStudentsCount, setStudentsCount] = useState(0);

    // Filter the students array to get only those who are present
    presentStudents = Filter students where student.present is true;

    // Calculate the new total students count
    newStudentsCount = Length of presentStudents;

    // Update the state with the newStudentsCount
    setStudentsCount(newStudentsCount);

function classInfo():
    // State initialization
    [studentsCount, setStudentsCount] = useState(0);

    // Rendered JSX
    Return (
        <div>
            <p>Number of students in the classroom: {studentsCount}</p>
            <button onClick={handleAddStudentClick}>Add student</button>
        </div>
    );





// b. How do you ensure that the function is triggered when the button is
// clicked?

// The onClick event handler on the button element is set to the handleAddStudentClick function. This ensures that the function is triggered when the button is clicked.



// c. How will you update the state with the result of your function?

// The setStudentsCount function is used to update the state with the result of the handleAddStudentClick function. The setStudentsCount function is called with the newStudentsCount variable as an argument. The newStudentsCount variable is calculated by filtering the students array to get only those who are present and then calculating the length of the filtered array.