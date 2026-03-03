import { ChangeDetectionStrategy, Component, input, signal, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'gos-input',
  standalone: true,
  templateUrl: './gos-input.html',
  styleUrl: './gos-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'style': 'display: block' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GosInputComponent),
      multi: true,
    },
  ],
})
export class GosInputComponent implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('');
  readonly hint = input('');
  readonly error = input('');
  readonly type = input<'text' | 'email' | 'password' | 'number' | 'tel' | 'url'>('text');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly inputId = input('');

  readonly value = signal('');
  readonly isDisabled = signal(false);

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.onChange(target.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
