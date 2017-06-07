import { Component } from '@angular/core';

const projectsData = [
  {
    name: 'Alpha Study',
    team: 'Nathália e Thaís - PD15 (matutino)',
    description: `Porque não juntar as funcionalidades
      de agenda e plano de estudos em
      um único aplicativo?`,
    video: 'alpha-study.mp4',
    image: 'alpha-study.png',
  },
  {
    name: 'Braile Reader',
    team: 'Jonaphael, Pedro, Yohann - PD16 (vespertino)',
    description: `Dispositivo para leitura de braile
      em uma única célula.`,
    video: 'braile-reader.mp4',
  },
  {
    name: 'Interface Visual de Proteínas',
    team: 'Gabriel, Guilherme, Júlia - PD16 (matutino)',
    description: `Visualização de proteínas em interface visual.`,
    video: 'proteinas_compress.mp4',
  },
  {
    name: 'Simas!',
    team: 'Emílio e Henrique - PD15 (matutino)',
    description: `Aprendizado de programação com
      uso de mascote em realidade aumentada.`,
    video: 'simas.mp4',
  },
  {
    name: 'Sine',
    team: 'Igor e Vitor - PD16 (matutino)',
    description: `Inclusão digital de seniores por meio
      de análise de aspectos de interface.`,
    video: 'sine_compress.mp4',
  },
  {
    name: 'Solidari',
    team: 'Gabriela e Mayara - PD15 (matutino)',
    description: `Criação de uma plataforma para interligação de
      ONGs, voluntários e doadores, colaborando com a criação, articulação e
      desenvolvimento destas iniciativas sociais.`,
    video: 'solidari.mp4',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevCotuca';
  projects = projectsData;

  initials(projectName: string): string {
    return projectName.split(' ').map((word) => {
      const character = word[0];
      return character === character.toLowerCase() ? '' : character;
    }).join('');
  }
}
