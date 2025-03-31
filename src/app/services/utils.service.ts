import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import dayjs from "dayjs";
import 'dayjs/locale/es';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private dateTimeSubject = new BehaviorSubject<string>(this.getFormattedDateTime());
  dateTime$ = this.dateTimeSubject.asObservable();

  constructor() {
    this.syncWithSystemTime();
  }

  private syncWithSystemTime() {
    this.updateDateTime();

    const now = new Date();
    const millisecondsToNextMinute = (60 - now.getSeconds()) * 1000;

    timer(millisecondsToNextMinute, 60000).subscribe(() => {
      this.updateDateTime();
    });
  }

  private updateDateTime() {
    this.dateTimeSubject.next(this.getFormattedDateTime());
  }

  private getFormattedDateTime(): string {
    return dayjs().format('DD/MMM/YYYY HH:mm');
  }

}
