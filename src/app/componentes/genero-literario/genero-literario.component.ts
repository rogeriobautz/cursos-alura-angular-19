import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CarrosselLivrosComponent } from "../carrossel-livros/carrossel-livros.component";
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  imports: [CommonModule, CarrosselLivrosComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
