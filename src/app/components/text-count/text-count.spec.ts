import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextCountComponent } from './text-count';
import { TextCount } from '../../interfaces/text-count.interface';

describe('TextCountComponent', () => {
  let fixture: ComponentFixture<TextCountComponent>;
  let component: TextCountComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextCountComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the correct number of groups and headings', () => {
    const data: TextCount[] = [
      { limit: 3, nums: [2], texts: ['Even'] },
      { limit: 2, nums: [2], texts: ['Even'] },
    ];

    fixture.componentRef.setInput('outputValues', data);
    fixture.detectChanges();

    const headings = host.querySelectorAll('h4');
    expect(headings.length).toBe(2);
    expect(headings[0].textContent?.trim()).toBe('Group 1');
    expect(headings[1].textContent?.trim()).toBe('Group 2');
  });

  it('renders the correct number of lines per group', () => {
    const data: TextCount[] = [
      { limit: 5, nums: [3, 5], texts: ['Fizz', 'Buzz'] },
      { limit: 3, nums: [2], texts: ['Even'] },
    ];

    fixture.componentRef.setInput('outputValues', data);
    fixture.detectChanges();

    const groups = Array.from(host.querySelectorAll('h4')).map(
      (h) => h.parentElement as HTMLElement
    );

    // Group 1 lines
    const group1Lines = groups[0].querySelectorAll('p');
    expect(group1Lines.length).toBe(5);
    expect(group1Lines[0].textContent?.trim()).toBe('1 1');
    expect(group1Lines[2].textContent?.trim()).toBe('3 Fizz');
    expect(group1Lines[4].textContent?.trim()).toBe('5 Buzz');

    // Group 2 lines
    const group2Lines = groups[1].querySelectorAll('p');
    expect(group2Lines.length).toBe(3);
    expect(group2Lines[0].textContent?.trim()).toBe('1 1');
    expect(group2Lines[1].textContent?.trim()).toBe('2 Even');
  });

  it('handles repeating text safely (track by $index) and still renders correctly', () => {
    const data: TextCount[] = [{ limit: 4, nums: [2], texts: ['Even'] }];

    fixture.componentRef.setInput('outputValues', data);
    fixture.detectChanges();

    const lines = host.querySelectorAll('p');
    expect(lines.length).toBe(4);
    expect(lines[0].textContent?.trim()).toBe('1 1');
    expect(lines[1].textContent?.trim()).toBe('2 Even');
    expect(lines[2].textContent?.trim()).toBe('3 3');
    expect(lines[3].textContent?.trim()).toBe('4 Even');
  });

  it('recomputes and updates when the input changes', () => {
    const first: TextCount[] = [{ limit: 3, nums: [3], texts: ['Three'] }];
    fixture.componentRef.setInput('outputValues', first);
    fixture.detectChanges();

    let lines = host.querySelectorAll('p');
    expect(lines.length).toBe(3);
    expect(lines[2].textContent?.trim()).toBe('3 Three');

    const second: TextCount[] = [
      { limit: 2, nums: [2], texts: ['Even'] },
      { limit: 1, nums: [1], texts: ['One'] },
    ];
    fixture.componentRef.setInput('outputValues', second);
    fixture.detectChanges();

    const headings = host.querySelectorAll('h4');
    expect(headings.length).toBe(2);
    lines = host.querySelectorAll('p');
    expect(lines.length).toBe(3);
    expect(headings[0].textContent?.trim()).toBe('Group 1');
    expect(headings[1].textContent?.trim()).toBe('Group 2');
  });

  it('renders nothing when input is empty', () => {
    fixture.componentRef.setInput('outputValues', []);
    fixture.detectChanges();

    expect(host.querySelectorAll('h4').length).toBe(0);
    expect(host.querySelectorAll('p').length).toBe(0);
  });
});
