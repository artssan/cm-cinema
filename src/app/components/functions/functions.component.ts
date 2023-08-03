import { Component, OnInit } from '@angular/core';
import { Function } from '../../models/function.model';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  functions: Function[] | undefined;

  constructor(private functionsService: FunctionsService) { }

  ngOnInit(): void {
    this.functionsService.getFunctions().subscribe((functions) => {
      this.functions = functions;
    });
  }
}