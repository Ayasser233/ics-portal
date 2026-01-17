import { Component, Input, OnInit, OnDestroy, PLATFORM_ID, inject, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface ApproachItem {
  image: string;
  mobileImage?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-approach-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approach-section.component.html',
  styleUrl: './approach-section.component.scss',
})
export class ApproachSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() title: string = '';
  @Input() items: ApproachItem[] = [];

  currentIndex = 0;
  private intervalId: any;
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.items.length > 1) {
      setTimeout(() => {
        this.startAutoPlay();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.cdr.detectChanges();
    }, 4000);
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next(): void {
    if (this.items.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.cdr.detectChanges();
    }
  }

  prev(): void {
    if (this.items.length > 0) {
      this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
      this.cdr.detectChanges();
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.cdr.detectChanges();
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
