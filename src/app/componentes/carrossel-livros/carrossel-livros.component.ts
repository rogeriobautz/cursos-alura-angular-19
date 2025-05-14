import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Livro } from '../livro/livro';
import { LivroComponent } from '../livro/livro.component';

interface Product {
  name: string;
  price: number;
  inventoryStatus: string;
  image: string;
}

@Component({
  selector: 'app-carrossel-livros',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    LivroComponent,
  ],
  templateUrl: './carrossel-livros.component.html',
  styleUrl: './carrossel-livros.component.css',
})
export class CarrosselLivrosComponent implements OnInit {

  livros = input.required<Livro[]>();
  livrosPorPagina = input<number>(3);
  rotativo = false;
  responsiveOptions: any[] = [];


  ngOnInit(): void {
    this.rotativo = this.livros().length > this.livrosPorPagina();
    this.responsiveOptions = [
      {
        breakpoint: '1199px', // when window width is <= 1199px
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '991px', // when window width is <= 991px
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
