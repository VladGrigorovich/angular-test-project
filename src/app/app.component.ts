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
    this.updateSvgPolyline();
  }

  ngAfterViewInit() {
    this.updateSvgPolyline();
  }

  updateSvgPolyline() {
    const svg = this.svgRef.nativeElement;
    const svgWidth = svg.getBoundingClientRect().width;
    svg.childNodes.forEach(node => {
      if (node instanceof SVGPolylineElement) {
        for (let i = 0, length = node.points.length; i < length; i++) {
          const point = node.points.getItem(i);

          // If point.x greater than svg width, window is getting smaller.
          // If point.x less than svg width, window is getting bigger.
          if (point.x > svgWidth || (point.x < svgWidth && point.x !== 0)) {
            point.x = svgWidth;
          }
        }
      }
    });
  }
}
