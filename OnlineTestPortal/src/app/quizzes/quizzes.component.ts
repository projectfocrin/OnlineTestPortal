import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit{

  questions!: Quiz[];
  isSubmitted: boolean = true;
  selectedOption! : any;
  numberOfCorrectAnswers: number = 0;
  resultText!:string;
  isCorrect:boolean[] = [false];
  selectedQuestion!: Quiz;
  answered:boolean[] = [false];
  answerResult:string[] = [''];
  viewResult:boolean = false;

  constructor(private ds: DataserviceService){}
  ngOnInit(): void {

    this.ds.getQuiz().subscribe({
      next: data => this.questions = data
    })
  }



}
