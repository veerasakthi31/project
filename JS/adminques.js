const menuIcon = document.querySelector('.icon');
const menuItems = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  if (menuItems.style.display === 'block') {
    menuItems.style.display = 'none';
  } else {
    menuItems.style.display = 'block';
  }
});

function addQues() {
       
    let question = document.getElementById("question").value;
    let option = document.getElementById("option").value;

    let answer = document.getElementById("answer").value;

//creating elements
    let row = document.createElement("tr");
    let questionData = document.createElement("td");
    let optionData = document.createElement("td");
    let answerData=document.createElement("td");

   //add the value to the created element
    questionData.innerHTML = question;
    optionData.innerHTML = option;
    answerData.innerHTML=answer;
//adds the data to the row and table
   
    row.appendChild(questionData);
    row.appendChild(optionData);
    row.appendChild(answerData);
    document.getElementById("questions").appendChild(row);
//to clear input values
   
    document.getElementById("question").value = "";
    document.getElementById("option").value = "";
    document.getElementById("answer").value = "";
   
        
    const postBtn = document.querySelector(".post_btn");
    const questionsTable = document.getElementById('questions');
        // Get the number of rows in the table
        const numRows = questionsTable.rows.length - 1; // Subtract the header row
   
      
        // Check if the number of rows is equal to 5
        if (numRows === 3){
          // Show the post button
          postBtn.style.display = "block";
        } else {
          // Hide the post button
          postBtn.style.display = "none";
        }
     
      
      
}



