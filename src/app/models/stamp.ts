
export interface Stamp {
  _id?: string;
  employeeId: string;
  month: number;
  workIn: Date;
  workOut?: Date;
}

export interface StampExt extends Stamp {
  date: string;
  timeString: string;
}
