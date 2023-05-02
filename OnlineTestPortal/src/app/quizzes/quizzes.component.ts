import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
  providers: [DataserviceService],
})
export class QuizzesComponent implements OnInit {
  questions!:Quiz[];
  isSubmitted:boolean=false;
  selectedOption!:any;
  numberOfCorrectAnswers:number = 0;
  resultText!:string;
 isCorrect:boolean[] = [false];
  selectedQuestion!: Quiz;
  answered:boolean[] = [false];
  answerResult:string[] = [''];
  viewResult:boolean = false;
  constructor(private ds:DataserviceService){}

  ngOnInit(): void {
    this.ds.getQuiz().subscribe({
      next: data=>this.questions = data
    })
   
  }

  getSelectedOption(questionIndex: number, question:Quiz){
    // means that the button is clicked
    this.isSubmitted = true;
    // changing the selectedQuestion to the currently selected question
    this.selectedQuestion = question; 
    // checking the result using isCorrectAnsuwer function 
    let result = this.isCorrectAnswer(questionIndex);
    // to check if the user has answered
    this.answered[questionIndex] = true;

    if(result){      
      this.resultText = "Answer is correct";   
      // stores the resultText in the answerResult list at a particular index  
      this.answerResult[questionIndex]  = this.resultText;
      // stores boolean in the isCorrect list at a particular index
      this.isCorrect[questionIndex] = true;

    }
    else{
      this.resultText = "Answer is wrong";            
      this.answerResult[questionIndex]  = this.resultText;
      this.isCorrect[questionIndex]=false;
    } 
    
    
  }

  isCorrectAnswer(questionIndex:number) {  
    // returns true if the answer of a question at a particular index answer matched the selectedOption which is two way binded in the html 
    const isCorrect = this.questions[questionIndex].answer === this.selectedOption;
  
    if (isCorrect) {
      this.numberOfCorrectAnswers++;
    }
    return isCorrect;
  }
  // to check the boolean at a partcular index position
  isCorrect1(i:number){
    return this.isCorrect[i];
  }

  isAnswered(i:number){
    return this.answered[i];
  }

  getResult(){
    this.viewResult = true;
  }

  // isAllQuestionAnswered(){
  //   if(this.questions.length == this.answered.length){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }


  

}
