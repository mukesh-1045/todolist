export class Todo {
  constructor() {
    (this.sno = 1), (this.title = ''), (this.desc = ''), (this.active = false);
  }

  sno: number;
  title: string;
  desc: string;
  active: boolean;
}
