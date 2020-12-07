import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('svg') svgRef: ElementRef<SVGElement>;

  @HostListener('window:resize')
  onWindowResize() {
    this.setUpSvg();
  }

  ngAfterViewInit() {
    this.setUpSvg();
  }

  setUpSvg() {
    const svg = this.svgRef.nativeElement;
    const svgWidth = svg.getBoundingClientRect().width;
    svg.childNodes.forEach((cn: SVGPolylineElement) => {
      for (let i = 0; i < cn.points?.length || 0; i++) {
        const point = cn.points.getItem(i);
        if (point.x > svgWidth || (point.x < svgWidth && point.x !== 0)) {
          point.x = svgWidth;
        }
      }
    });
  }
}
