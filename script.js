// Q1
var studentNames = []

console.log(studentNames)


// Q2
var studentNames = new Array("Zeehan","Ahil","Adan")

console.log(studentNames)


// Q3
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta"]

console.log(cities)


// Q4
var numbers = [10, 20, 30, 40, 50]

console.log(numbers)


// Q5
var answers = [true, false, true, false]

console.log(answers)


// Q6
var mixedArray = ["Wini", 20, true, "Karachi", 5000]

console.log(mixedArray)


// Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

document.write("<h2>Educational Qualifications in Pakistan</h2>")
document.write("<br>1. " + qualifications[0])
document.write("<br>2. " + qualifications[1])
document.write("<br>3. " + qualifications[2])
document.write("<br>4. " + qualifications[3])
document.write("<br>5. " + qualifications[4])
document.write("<br>6. " + qualifications[5])
document.write("<br>7. " + qualifications[6])
document.write("<br>8. " + qualifications[7])

console.log(qualifications)

// Q8

var studentNames = ["Ahil", "Zeehan", "Adan"]

var scores = [400, 350, 450]

var totalMarks = 500

var percentage1 = (scores[0] / totalMarks) * 100
var percentage2 = (scores[1] / totalMarks) * 100
var percentage3 = (scores[2] / totalMarks) * 100

console.log(studentNames[0], "Score =", scores[0], "Percentage =", percentage1 + "%")
console.log(studentNames[1], "Score =", scores[1], "Percentage =", percentage2 + "%")
console.log(studentNames[2], "Score =", scores[2], "Percentage =", percentage3 + "%")

document.write("Student: " + studentNames[0] + " | Score: " + scores[0] + " | Percentage: " + percentage1 + "%")
document.write("<br>Student: " + studentNames[1] + " | Score: " + scores[1] + " | Percentage: " + percentage2 + "%")
document.write("<br>Student: " + studentNames[2] + " | Score: " + scores[2] + " | Percentage: " + percentage3 + "%")
