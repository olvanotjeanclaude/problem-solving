function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => {
        const isLessThanOccurs = grade < 38
        
        if (isLessThanOccurs) {
            return grade;
        }
        
        const roundByNextMultipleFive = Math.ceil(grade / 5) * 5
        
        const isToRounded = roundByNextMultipleFive - grade < 3;
        
        if (isToRounded) {
            return roundByNextMultipleFive;
        }
        
        return grade;
        
    })
}
