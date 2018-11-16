
export interface Stamp {
  id: string;
  employeeId: string;
  month: number;
  time: Date;
}

export interface StampExt extends Stamp {
  date: string;
  timeString: string;
}
