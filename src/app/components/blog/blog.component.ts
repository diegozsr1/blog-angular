import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNoticias: INoticia[] = [
    {
      titulo: 'Primera noticia',
      imagen: 'https://images.ecestaticos.com/kusNwYwGY5Hx72h2immY2W377d0=/0x0:2272x1552/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9e6%2F637%2Fe9d%2F9e6637e9d75e375b63a05ff809178b34.jpg',
      texto: 'Contenido de la primera noticia',
      fecha: '2026-02-16'
    },
    {
      titulo: 'Segunda noticia',
      imagen: 'https://cdn-5.motorsport.com/images/amp/0L1yy9V2/s1000/marc-marquez-ducati-3.jpg',
      texto: 'Contenido de la segunda noticia',
      fecha: '2026-02-16'
    },
  ]

  nuevaNoticia: INoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  avisoFallo: string = ""

  recibirDatos() {
  if (!this.nuevaNoticia.titulo || !this.nuevaNoticia.imagen || !this.nuevaNoticia.texto || !this.nuevaNoticia.fecha) {
    this.avisoFallo = "Todos los campos son obligatorios"
    return;
  }
    this.arrayNoticias.push({...this.nuevaNoticia});
    console.log(this.arrayNoticias);
    this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    this.avisoFallo = "";
    
  }

}
